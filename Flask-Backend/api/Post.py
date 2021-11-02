import config.imports as imports
from config.db_connect import conn

from config.imports import json
from config.imports import Resource

class PostHawon(Resource):
    def get(self):
        return {
            'Hawon': ['face', 'meh']
        }