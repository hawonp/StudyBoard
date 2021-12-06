from config.imports import mariadb, sys

local_flask = False


def get_connection():
    try:
        conn = mariadb.connect(
            user="mod",
            password="studyboard2021",
            host="studyboard_db",
            port=3306,
            database="studyboard_db"
        )
        return conn
    except mariadb.Error as e:
        print(f"Error connecting to MariaDB Platform: {e}")
        sys.exit(1)
