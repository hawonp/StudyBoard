from config.imports import (Resource, Schema, abort, fields, json, request,
                            validate)
from query.flag_query import flag_reply
from query.reply_query import (add_post_reply, add_reply_reply,
                               add_user_like_reply, delete_reply,
                               delete_user_like_reply, get_replies_to_post)

############################
#    CONSTANT URL PATH     #
############################
POSTS = '/posts'
POST_ID = '/<int:id>'
REPLIES = '/replies'
REPLY_ID = '/<int:id>'
LIKES = '/likes'
FLAG = '/flag'

############################
#    Marshmallow Schema    #
############################


class ReplyInteractorIDSchema(Schema):
    userID = fields.Str(required=True)


class GetRepliesSchenma(Schema):
    userID = fields.Str(required=False)
    order = fields.Int(required=True, validate=validate.Range(min=0, max=2))


class AddReplySchema(Schema):
    userID = fields.Str(required=True)
    text = fields.Str(required=True, validate=validate.Length(min=1, max=512))


class AddReplyToReplySchema(Schema):
    userID = fields.Str(required=True)
    postID = fields.Str(required=True)
    text = fields.Str(required=True, validate=validate.Length(min=1, max=512))


class ReplyFlagSchema(Schema):
    userID = fields.Str(required=True)
    postID = fields.Str(required=True)
    text = fields.Str(required=True, validate=validate.Length(min=1, max=256))

############################
# Flask RESTful API routes #
############################


class PostReply(Resource):
    def get(self, id):
        # Validate params first
        errors = get_replies_schema.validate(request.args)
        if errors:
            abort(400, str(errors))

        # Getting the params
        order = int(request.args.get('order'))
        user_id = request.args.get('userID')
        # Get the replies
        replies = get_replies_to_post(id, order, user_id)

        return json.dumps(replies, default=str)

    def post(self, id):
        # Validate params first
        formData = request.get_json()["params"]
        errors = add_reply_schema.validate(formData)

        if errors:
            print(errors)
            abort(400, str(errors))

        text = formData["text"]
        user_id = formData["userID"]

        res = add_post_reply(user_id, id, text)

        return json.dumps(res)


class Reply(Resource):
    def delete(self, id):
        # remove reply
        res = delete_reply(id)
        return res


class ReplyReply(Resource):
    def post(self, id):
        # Validate params first
        formData = request.get_json()["params"]
        errors = add_reply_to_reply_schema.validate(formData)

        if errors:
            print(errors)
            abort(400, str(errors))

        text = formData["text"]
        user_id = formData["userID"]
        post_id = formData["postID"]

        res = add_reply_reply(user_id, id, post_id, text)

        return json.dumps(res, default=str)


class ReplyLike(Resource):
    def post(self, id):
        # Validate params and assign variables
        formData = request.get_json()["params"]
        errors = reply_interactor_id_schema.validate(formData)
        if errors:
            print("Request parameters error")
            abort(400, str(errors))

        # Like
        user_id = formData["userID"]
        print("Adding user like to reply")
        res = add_user_like_reply(id, user_id)
        if res == 0:
            abort(500, "Oops. Something went wrong.")
        return res

    def delete(self, id):
        # Validate params and assign variables
        errors = reply_interactor_id_schema.validate(request.args)
        if errors:
            print("Request parameters error")
            abort(400, str(errors))
        user_id = request.args.get('userID')

        # Un-like
        print("Removing user like from Reply")
        res = delete_user_like_reply(id, user_id)
        if res == 0:
            abort(500, "Oops. Something went wrong.")
        return res

# Add flag a post


class ReplyFlag(Resource):
    def post(self, id):
        # Validate params and assign variables
        formData = request.get_json()["params"]
        errors = reply_flags_schema.validate(formData)
        if errors:
            print("Request parameters error")
            abort(400, str(errors))

        # Fetch the params
        flag_text = formData["text"]
        user_id = formData["userID"]
        post_id = formData["postID"]

        res = flag_reply(id, user_id, post_id, flag_text)
        if res == 0:
            abort(500, "Oops. Something went wrong.")
        return res

# Add routes to api


def init_routes(api):
    api.add_resource(PostReply, POSTS+POST_ID+REPLIES)
    api.add_resource(ReplyReply, REPLIES+REPLY_ID+REPLIES)
    api.add_resource(ReplyLike, REPLIES+REPLY_ID+LIKES)
    api.add_resource(ReplyFlag, REPLIES+REPLY_ID+FLAG)
    api.add_resource(Reply, REPLIES+REPLY_ID)


add_reply_schema = AddReplySchema()
reply_flags_schema = ReplyFlagSchema()
get_replies_schema = GetRepliesSchenma()
reply_interactor_id_schema = ReplyInteractorIDSchema()
add_reply_to_reply_schema = AddReplyToReplySchema()
