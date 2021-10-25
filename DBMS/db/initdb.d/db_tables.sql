-- ------------ DATABASE INITIALISATION ------------
DROP DATABASE IF EXISTS studyboard_db;
DROP USER IF EXISTS 'mod'@'localhost';
CREATE DATABASE studyboard_db CHARACTER SET utf8 COLLATE utf8_bin;

CREATE USER 'mod'@'localhost' IDENTIFIED by 'studyboard2021';

GRANT ALL PRIVILEGES ON studyboard_db.* to 'mod'@'localhost' identified by 'studyboard2021';

USE studyboard_db;

------------ TABLES ------------

-- INITIALISING TABLES

-- USER --
CREATE TABLE User(
    user_id INTEGER NOT NULL,
    user_nickname VARCHAR(16),
    user_is_endorsed BOOLEAN,
    user_is_mod BOOLEAN,
    user_flags_received INTEGER,
    user_likes_received INTEGER,
    PRIMARY KEY(user_id)
);

INSERT INTO User(user_id, user_nickname, user_is_endorsed, user_is_mod, user_flags_received, user_likes_received)
VALUES (20, "No", FALSE, FALSE, 10, 10);

-- QUESTION POST --

CREATE TABLE Post(
    post_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    post_title VARCHAR(32),
    post_text VARCHAR(1024),
    post_like_count INTEGER,
    post_reply_count INTEGER,
    post_favourite_count INTEGER,
    post_date DATETIME,
    PRIMARY KEY(post_id)
);

CREATE TABLE Post_Image(
    image_id INTEGER NOT NULL,
    post_id INTEGER NOT NULL,
    image_url VARCHAR(256),
    PRIMARY KEY(image_id),
    FOREIGN KEY(post_id) REFERENCES Post(post_id)
);

CREATE TABLE User_Post_Like(
    user_id INTEGER NOT NULL,
    post_id INTEGER NOT NULL,
    PRIMARY KEY(user_id, post_id),
    FOREIGN KEY (post_id) REFERENCES Post(post_id),
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);

CREATE TABLE Post_Report(
    report_id INTEGER NOT NULL,
    post_id INTEGER NOT NULL,
    user_id INTEGER,
    report_text VARCHAR(256),
    report_date DATETIME,
    PRIMARY KEY(report_id),
    FOREIGN KEY (post_id) REFERENCES Post(post_id),
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);

-- REPLY/REPLIES --
CREATE TABLE Reply(
    reply_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    reply_text VARCHAR(512),
    reply_like_count INTEGER,
    reply_date DATETIME,
    PRIMARY KEY(reply_id),
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);

CREATE TABLE Reply_To_Post(
    post_id INTEGER NOT NULL,
    reply_id INTEGER NOT NULL,
    PRIMARY KEY(post_id, reply_id),
    FOREIGN KEY (post_id) REFERENCES Post(post_id),
    FOREIGN KEY (reply_id) REFERENCES Reply(reply_id)
);

CREATE TABLE Reply_To_Reply(
    source_id INTEGER NOT NULL,
    reply_id INTEGER NOT NULL,
    PRIMARY KEY(source_id, reply_id),
    FOREIGN KEY (source_id) REFERENCES Reply(reply_id),
    FOREIGN KEY (reply_id) REFERENCES Reply(reply_id)
);

CREATE TABLE User_Reply_Like(
    user_id INTEGER NOT NULL,
    reply_id INTEGER NOT NULL,
    PRIMARY KEY (user_id, reply_id),
    FOREIGN KEY (user_id) REFERENCES User(user_id),
    FOREIGN KEY (reply_id) REFERENCES Reply(reply_id)
);

CREATE TABLE Reply_Report(
    report_id INTEGER NOT NULL,
    reply_id INTEGER NOT NULL,
    user_id INTEGER,
    report_text VARCHAR(256),
    report_date DATETIME,
    PRIMARY KEY(report_id),
    FOREIGN KEY (reply_id) REFERENCES Reply(reply_id),
    FOREIGN KEY (user_id) REFERENCES User(user_id)
);

-- TAGS --
CREATE TABLE Tag(
    tag_id INTEGER NOT NULL,
    tag_name VARCHAR(32),
    PRIMARY KEY(tag_id)
);

CREATE TABLE User_Tag(
    tag_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    PRIMARY KEY(tag_id, user_id),
    FOREIGN KEY(user_id) REFERENCES User(user_id)
);

CREATE TABLE Post_Tag(
    tag_id INTEGER NOT NULL,
    post_id INTEGER NOT NULL,
    PRIMARY KEY(tag_id, post_id),
    FOREIGN KEY(post_id) REFERENCES Post(post_id)
);

-- NOTIFICATION --
CREATE TABLE Notification(
    notification_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    notification_text VARCHAR(128),
    notification_date DATETIME,
    notification_seen BOOLEAN,
    PRIMARY KEY(notification_id),
    FOREIGN KEY(user_id) REFERENCES User(user_id)
);
-- FAVOURITE QUESTION --
CREATE TABLE Favourite_Question(
    post_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    PRIMARY KEY(post_id, user_id),
    FOREIGN KEY(user_id) REFERENCES User(user_id),
    FOREIGN KEY(post_id) REFERENCES Post(post_id)
);

-- SEARCH HISTORY --
CREATE TABLE Search_History(
    search_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    search_text VARCHAR(128),
    search_date DATETIME,
    PRIMARY KEY(search_id),
    FOREIGN KEY(user_id) REFERENCES User(user_id)
);

-- BLACKLIST --
CREATE TABLE Blacklisted_User(
    user_id INTEGER NOT NULL,
    PRIMARY KEY(user_id),
    FOREIGN KEY(user_id) REFERENCES User(user_id)
);