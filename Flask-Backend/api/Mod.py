from config.imports import json, Resource, request, abort
from config.imports import Schema, fields
from query.flag_query import get_flagged_posts, get_flagged_replies, get_flagged_users
from query.flag_query import accept_post_flag, deny_post_flag, accept_reply_flag, deny_reply_flag, update_flag_count
from query.user_query import check_if_user_is_mod, add_user_to_blacklist, set_endorse_threshhold, update_user
from query.post_query import delete_post
from query.reply_query import delete_reply
from query.notification_query import add_notif_report_accepted
from Auth0 import block_user

############################
#    CONSTANT URL PATH     #
############################
FLAGGED = '/flagged'
REPLIES = '/replies'
POSTS = '/posts'
USERS = '/users'
FLAG_ID = '/<int:id>'
USER_ID = '/<string:id>'
MOD = '/moderator'
ENDORSE = '/endorsed'
THRESHHOLD = '/<int:num>'

############################
#    Marshmallow Schema    #
############################
class HandleReportAuthorisationSchema(Schema):
    userID = fields.Str(required=True)
    contentID = fields.Int(required=True)

class ModeratorAuthorisationSchema(Schema):
    userID = fields.Str(required=True)
    contentID = fields.Int(required=True)

############################
# Flask RESTful API routes #
############################

class RespondToPostFlag(Resource):
    def delete(self, id):
        #Validate params first
        errors = handle_report_authorise_schema.validate(request.args)
        if errors:
            print(errors)
            abort(400, str(errors))
            
        #Fetch params
        user_id = request.args.get('userID')
        post_id = request.args.get('contentID')

        #Check if the user is a mod and execute
        if check_if_user_is_mod(user_id):
            #User must be a mod
            add_notif_res = add_notif_report_accepted(id, "Post_Report")
            upd_flag_count_res = update_flag_count(id,1, 0)
            res = accept_post_flag(post_id)
            del_post_res = delete_post(post_id)
        else:
            err = "Not authorised"
            print(err)
            abort(403, err)


        return json.dumps(res)
    def put(self, id):
        #Validate params first
        formData = request.get_json()["params"]
        print("formdata", formData)
        errors = handle_report_authorise_schema.validate(formData)
        if errors:
            print(errors)
            abort(400, str(errors))
        
        #Now fetch the params
        user_id = formData["userID"]
        post_id = formData["contentID"]

        #Check if the user is a mod and execute
        if check_if_user_is_mod(user_id):
            #User must be a mod
            res = deny_post_flag(id)
        else:
            err = "Not authorised"
            print(err)
            abort(403, err)

        return res

class RespondToReplyFlag(Resource):
    def delete(self, id):
        #Validate params first
        errors = handle_report_authorise_schema.validate(request.args)
        if errors:
            print(errors)
            abort(400, str(errors))
        
        #Now fetch the params
        user_id = request.args.get('userID')
        reply_id = request.args.get('contentID')

        #Check if the user is a mod and execute
        if check_if_user_is_mod(user_id):
            #User must be a mod
            add_notif_res = add_notif_report_accepted(id, "Reply_Report")
            upd_flag_count_res = update_flag_count(id,0, 0)
            res = accept_reply_flag(reply_id)
            del_reply_res = delete_reply(reply_id)
        else:
            err = "Not authorised"
            print(err)
            abort(403, err)
        
        return json.dumps(res)
    def put(self, id):
        #Validate params first
        formData = request.get_json()["params"]
        print("formdata", formData)
        errors = handle_report_authorise_schema.validate(formData)

        if errors:
            print(errors)
            abort(400, str(errors))
        
        #Now fetch the params
        user_id = formData["userID"]
        reply_id = formData["contentID"]

        #Check if the user is a mod and execute
        if check_if_user_is_mod(user_id):
            #User must be a mod
            res = deny_reply_flag(id)
        else:
            err = "Not authorised"
            print(err)
            abort(403, err)

        return res

class BlacklistUser(Resource):
    def post(self, id):
        #Validate params first
        formData = request.get_json()["params"]
        print("formdata", formData)
        errors = mod_authorise_schema.validate(formData)
        if errors:
            print(errors)
            abort(400, str(errors))
        
        #Now fetch the params
        user_id = formData["userID"]

        #Check if the user is a mod and execute
        if check_if_user_is_mod(user_id):
            #User must be a mod
            add_user_to_blacklist(id)
            res =update_user(id, "user-deleted", [])
            block_user(id)

        else:
            err = "Not authorised"
            print(err)
            abort(403, err)
        
        return json.dumps(res)

class FlaggedPosts(Resource):
    def get(self):

        #Get posts with given offset, sort order and tag filter
        reports = get_flagged_posts()
            
        return json.dumps(reports, default=str)

class FlaggedReplies(Resource):
    def get(self):
        #Get posts with given offset, sort order and tag filter
        reports = get_flagged_replies()
            
        return json.dumps(reports, default=str)

class FlaggedUsers(Resource):
    def get(self):
        #Get posts with given offset, sort order and tag filter
        reports = get_flagged_users()
            
        return json.dumps(reports, default=str)

class EndorseThreshhold(Resource):
    def put(self, num):
        #Get posts with given offset, sort order and tag filter
        res = set_endorse_threshhold(int(num))

        return json.dumps(res)



#Add routes to api
def init_routes(api):
    api.add_resource(FlaggedPosts, FLAGGED+POSTS)
    api.add_resource(RespondToPostFlag, FLAGGED+POSTS+FLAG_ID)
    api.add_resource(RespondToReplyFlag, FLAGGED+REPLIES+FLAG_ID)
    api.add_resource(FlaggedReplies, FLAGGED+REPLIES)
    api.add_resource(FlaggedUsers, FLAGGED+USERS)
    api.add_resource(BlacklistUser, FLAGGED+USERS+USER_ID)
    api.add_resource(EndorseThreshhold, MOD+ENDORSE+THRESHHOLD)

mod_authorise_schema = ModeratorAuthorisationSchema()
handle_report_authorise_schema = HandleReportAuthorisationSchema()