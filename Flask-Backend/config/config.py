from config.imports import load_dotenv, os, redis

load_dotenv()

class ApplicationConfig:
    
    # secret key used by Flask, etc
    SECRET_KEY = os.environ['SECRET_KEY']

    # google API credentials
    GOOGLE_CLIENT_ID = os.environ.get('GOOGLE_CLIENT_ID')
    GOOGLE_CLIENT_SECRET = os.environ.get('GOOGLE_CLIENT_SECRET')
    GOOGLE_DISCOVERY_URL = ('GOOGLE_DISCOVERY_URL')

    # Session Management
    SESSION_TYPE = 'filesystem'
    SESSION_PERMANENT = False
    SESSION_USE_SIGNER = True

    # session url (localhost)

    # CORS headers
    CORS_HEADERS = 'Access-Control-Allow-Origin'
