import http.client

conn = http.client.HTTPSConnection("dev-4hazox-r.jp.auth0.com")

payload = "{\"client_id\":\"9Xlo1ewrCoXIU8TAtNJBhfdso91LAKbe\",\"client_secret\":\"SnIaHE3981RiB0BFD1awxLc-pQ7FHT1Kl5Bdb1Zw_AEqlEU8zhLdzotp5vC8Sy5X\",\"audience\":\"https://dev-4hazox-r.jp.auth0.com/api/v2/\",\"grant_type\":\"client_credentials\"}"

headers = { 'content-type': "application/json" }

conn.request("POST", "/oauth/token", payload, headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))