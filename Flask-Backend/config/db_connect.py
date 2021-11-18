from config.imports import mariadb
from config.imports import sys

local_flask = False

try:
    if local_flask == False:
        conn = mariadb.connect(
            user="mod",
            password="studyboard2021",
            host="studyboard_db",
            port=3306,
            database="studyboard_db"
        )
    else:
        conn = mariadb.connect(
            user="mod",
            password="studyboard2021",
            host="localhost",
            port=3306,
            database="studyboard_db"
        )
except mariadb.Error as e:
    print(f"Error connecting to MariaDB Platform: {e}")
    sys.exit(1)
