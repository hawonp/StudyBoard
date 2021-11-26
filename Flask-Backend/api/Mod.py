from config.imports import json, Resource, request, abort
from config.imports import Schema, fields
from query.flag_query import get_flagged_posts, get_flagged_replies

############################
#    CONSTANT URL PATH     #
############################
FLAGGED = '/flagged'
REPLIES = '/replies'
POSTS = '/posts'
USERS = '/users'

############################
#    Marshmallow Schema    #
############################
# class FlaggedItemsOffsetSchema(Schema):
#     page = fields.Int(required=True)

############################
# Flask RESTful API routes #
############################

class FlaggedPosts(Resource):
    def get(self):

        #Get posts with given offset, sort order and tag filter
        reports = get_flagged_posts()
            
        return json.dumps(reports, default=str)

    def delete(self):
        pass


class FlaggedReplies(Resource):
    def get(self):
        #Validate params first
        errors = flagged_items_offset_schema.validate(request.args)
        if errors:
            abort(400, str(errors))
        
        #Assuming all params have been validated.
        page = int(request.args.get('page'))

        #Get posts with given offset, sort order and tag filter
        reports = get_flagged_replies(page)
            
        return json.dumps(reports, default=str)

    def delete(self):
        pass


class FlaggedUsers(Resource):
    def get(self):
        pass

#Add routes to api
def init_routes(api):
    api.add_resource(FlaggedPosts, FLAGGED+POSTS)
    api.add_resource(FlaggedReplies, FLAGGED+REPLIES)
    api.add_resource(FlaggedUsers, FLAGGED+USERS)

# flagged_items_offset_schema = FlaggedItemsOffsetSchema()