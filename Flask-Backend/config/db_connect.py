from config.imports import mariadb
from config.imports import sys

local_flask = False

try:
    conn = mariadb.connect(
        user="mod",
        password="studyboard2021",
        host="studyboard_db",
        port=3306,
        database="studyboard_db"
    )
except mariadb.Error as e:
    print(f"Error connecting to MariaDB Platform: {e}")
    sys.exit(1)
