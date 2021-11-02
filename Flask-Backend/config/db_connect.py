import config.imports as imports
local_flask = False

try:
    if local_flask == False:
        conn = imports.mariadb.connect(
            user="mod",
            password="studyboard2021",
            host="dbms_container",
            port=3306,
            database="studyboard_db"
        )
    else:
        conn = imports.mariadb.connect(
            user="mod",
            password="studyboard2021",
            host="localhost",
            port=3306,
            database="studyboard_db"
        )
except imports.mariadb.Error as e:
    print(f"Error connecting to MariaDB Platform: {e}")
    imports.sys.exit(1)
