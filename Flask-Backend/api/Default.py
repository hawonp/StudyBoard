from config.imports import json
from config.imports import Resource

class HelloWorld(Resource):
    def get(self):
        return {
            'Galaxies': ['Milkyway', 'Andromeda', 
            'Large Magellanic Cloud (LMC)']
        }

def init_routes(api):
    api.add_resource(HelloWorld, '/api')
