import http.client
import json, requests
from requests.exceptions import RequestException, HTTPError, URLRequired

def get_auth_token2():
    # Configuration Values
    domain = 'dev-4hazox-r.jp.auth0.com'
    audience = f'https://{domain}/api/v2/'
    client_id = '9Xlo1ewrCoXIU8TAtNJBhfdso91LAKbe'
    client_secret = 'SnIaHE3981RiB0BFD1awxLc-pQ7FHT1Kl5Bdb1Zw_AEqlEU8zhLdzotp5vC8Sy5X'
    grant_type = "client_credentials" # OAuth 2.0 flow to use

    # Get an Access Token from Auth0
    base_url = f"https://{domain}"
    payload =  { 
        'grant_type': grant_type,
        'client_id': client_id,
        'client_secret': client_secret,
        'audience': audience
    }
    response = requests.post(f'{base_url}/oauth/token', data=payload)
    oauth = response.json()
    access_token = oauth.get('access_token')
    # print(access_token)

    return access_token, base_url

def block_user(user_id):
    access_token, base_url = get_auth_token2()

    headers = {
        'content-type': "application/json",
        'authorization': f'Bearer {access_token}'
    }

    payload = "{\"blocked\": true}"    

    print(base_url, user_id)
     # Get all Applications using the token
    try:
        res = requests.patch(f'{base_url}/api/v2/users/{user_id}', data=payload, headers=headers)
        print(res.json())
    except HTTPError as e:
        print(f'HTTPError: {str(e.code)} {str(e.reason)}')
    except URLRequired as e:
        print(f'URLRequired: {str(e.reason)}')
    except RequestException as e:
        print(f'RequestException: {e}')
    except Exception as e:
        print(f'Generic Exception: {e}')

def unblock_user(user_id):
    access_token, base_url = get_auth_token2()

    headers = {
        'content-type': "application/json",
        'authorization': f'Bearer {access_token}'
    }

    payload = "{\"blocked\": false}"    

    print(base_url, user_id)
     # Get all Applications using the token
    try:
        res = requests.patch(f'{base_url}/api/v2/users/{user_id}', data=payload, headers=headers)
        print(res.json())
    except HTTPError as e:
        print(f'HTTPError: {str(e.code)} {str(e.reason)}')
    except URLRequired as e:
        print(f'URLRequired: {str(e.reason)}')
    except RequestException as e:
        print(f'RequestException: {e}')
    except Exception as e:
        print(f'Generic Exception: {e}')

def delete_user(user_id):
    access_token, base_url = get_auth_token2()

    headers = {
        'content-type': "application/json",
        'authorization': f'Bearer {access_token}'
    }

    print(base_url, user_id)
     # Get all Applications using the token
    try:
        res = requests.delete(f'{base_url}/api/v2/users/{user_id}', headers=headers)
    except HTTPError as e:
        print(f'HTTPError: {str(e.code)} {str(e.reason)}')
    except URLRequired as e:
        print(f'URLRequired: {str(e.reason)}')
    except RequestException as e:
        print(f'RequestException: {e}')
    except Exception as e:
        print(f'Generic Exception: {e}')   

# delete_user('auth0|61a5b8bb5e789500708a4450')
# block_user('google-oauth2|111018540029339892762')