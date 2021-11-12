import os

GOOGLE_CLIENT_ID = os.environ.get("GOOGLE_CLIENT_ID", "1477798809-45238qspaivuvrrpn8ocnp6sbpeu567l.apps.googleusercontent.com")
GOOGLE_CLIENT_SECRET = os.environ.get("GOOGLE_CLIENT_SECRET", "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")
GOOGLE_DISCOVERY_URL = ("http://localhost:9090/api/login/google/callback")