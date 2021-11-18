from config.imports import Resource, ImageKit, os
from config.config import ApplicationConfig
import time
import hashlib
import hmac
from email import utils

class Image(Resource):
    def get(self):
        imageKit = ImageKit(
            public_key=ApplicationConfig.PUBLIC_KEY,
            private_key=ApplicationConfig.PRIVATE_KEY,
            url_endpoint=ApplicationConfig.URL_ENTPOINT
        )

        auth_params = imageKit.get_authentication_parameters()

        print("Auth Params-", auth_params)
        return auth_params

class ImageTest(Resource):
    def get(self):
        imageKit = ImageKit(
            public_key=ApplicationConfig.PUBLIC_KEY,
            private_key=ApplicationConfig.PRIVATE_KEY,
            url_endpoint=ApplicationConfig.URL_ENTPOINT
        ) 
        upload = imageKit.upload(
            file=open("image.jpg", "rb"),            
            file_name="my_file_name.jpg",
        )
        return("upload binary ", upload)

def init_routes(api):
    api.add_resource(Image, '/auth')
