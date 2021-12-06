-- ------------ DATABASE INITIALISATION ------------
DROP DATABASE IF EXISTS studyboard_db;
DROP USER IF EXISTS 'mod'@'localhost';
CREATE DATABASE studyboard_db CHARACTER SET utf8 COLLATE utf8_bin;

-- TODO adjust for server when uploaded
CREATE USER 'mod'@'localhost' IDENTIFIED by 'studyboard2021';

GRANT ALL PRIVILEGES ON studyboard_db.* to 'mod'@'localhost' identified by 'studyboard2021';

USE studyboard_db;

------------ TABLES ------------
-- VERSION 2.0
-- INITIALISING TABLES

-- USER --
CREATE TABLE User(
    user_id VARCHAR(64) NOT NULL,
    user_email_address VARCHAR(32) NOT NULL UNIQUE,
    user_nickname VARCHAR(16) NOT NULL,
    user_is_endorsed BOOLEAN NOT NULL DEFAULT 0,
    user_is_mod BOOLEAN NOT NULL DEFAULT 0,
    user_flags_received INTEGER NOT NULL DEFAULT 0,
    user_likes_received INTEGER NOT NULL DEFAULT 0,
    user_rank_points INTEGER NOT NULL DEFAULT 0,
    PRIMARY KEY(user_id)
);

-- QUESTION POST --

CREATE TABLE Post(
    post_id INTEGER NOT NULL AUTO_INCREMENT,
    user_id VARCHAR(64) NOT NULL,
    post_title VARCHAR(64) NOT NULL,
    post_text VARCHAR(2048) NOT NULL,
    post_image VARCHAR(512),
    post_like_count INTEGER NOT NULL DEFAULT 0,
    post_reply_count INTEGER NOT NULL DEFAULT 0,
    post_favourite_count INTEGER NOT NULL DEFAULT 0,
    post_date DATETIME NOT NULL,
    PRIMARY KEY(post_id),
    FOREIGN KEY (user_id) REFERENCES User(user_id) ON UPDATE CASCADE
);

CREATE TABLE User_Post_Like(
    user_id VARCHAR(64) NOT NULL,
    post_id INTEGER NOT NULL,
    PRIMARY KEY(user_id, post_id),
    FOREIGN KEY (post_id) REFERENCES Post(post_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES User(user_id) ON UPDATE CASCADE
);

CREATE TABLE Post_Report(
    report_id INTEGER NOT NULL AUTO_INCREMENT,
    post_id INTEGER NOT NULL,
    user_id VARCHAR(64) NOT NULL,
    report_text VARCHAR(256) NOT NULL,
    report_date DATETIME NOT NULL,
    PRIMARY KEY(report_id),
    FOREIGN KEY (post_id) REFERENCES Post(post_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES User(user_id) ON UPDATE CASCADE
);

-- REPLY/REPLIES --
CREATE TABLE Reply(
    reply_id INTEGER NOT NULL AUTO_INCREMENT,
    user_id VARCHAR(64) NOT NULL,
    reply_text VARCHAR(512) NOT NULL,
    reply_like_count INTEGER NOT NULL DEFAULT 0,
    reply_date DATETIME NOT NULL,
    PRIMARY KEY(reply_id),
    FOREIGN KEY (user_id) REFERENCES User(user_id) ON UPDATE CASCADE
);

CREATE TABLE Reply_To_Post(
    post_id INTEGER NOT NULL,
    reply_id INTEGER NOT NULL,
    PRIMARY KEY(post_id, reply_id),
    FOREIGN KEY (post_id) REFERENCES Post(post_id) ON DELETE CASCADE,
    FOREIGN KEY (reply_id) REFERENCES Reply(reply_id) ON DELETE CASCADE
);

CREATE TABLE Reply_To_Reply(
    source_id INTEGER NOT NULL,
    reply_id INTEGER NOT NULL,
    post_id INTEGER NOT NULL,
    PRIMARY KEY(source_id, reply_id),
    FOREIGN KEY (post_id) REFERENCES Post(post_id) ON DELETE CASCADE,
    FOREIGN KEY (source_id) REFERENCES Reply(reply_id) ON DELETE CASCADE,
    FOREIGN KEY (reply_id) REFERENCES Reply(reply_id) ON DELETE CASCADE
);

CREATE TABLE User_Reply_Like(
    user_id VARCHAR(64) NOT NULL,
    reply_id INTEGER NOT NULL,
    PRIMARY KEY (user_id, reply_id),
    FOREIGN KEY (user_id) REFERENCES User(user_id) ON UPDATE CASCADE,
    FOREIGN KEY (reply_id) REFERENCES Reply(reply_id) ON DELETE CASCADE
);

CREATE TABLE Reply_Report(
    report_id INTEGER NOT NULL AUTO_INCREMENT,
    post_id INTEGER NOT NULL,
    reply_id INTEGER NOT NULL,
    user_id VARCHAR(64) NOT NULL,
    report_text VARCHAR(256) NOT NULL,
    report_date DATETIME NOT NULL,
    PRIMARY KEY(report_id),
    FOREIGN KEY (reply_id) REFERENCES Reply(reply_id) ON DELETE CASCADE,
    FOREIGN KEY (post_id) REFERENCES Post(post_id) ON DELETE CASCADE,
    FOREIGN KEY (user_id) REFERENCES User(user_id) ON UPDATE CASCADE
);

-- TAGS --
CREATE TABLE Tag(
    tag_id INTEGER NOT NULL AUTO_INCREMENT,
    tag_name VARCHAR(32) NOT NULL UNIQUE,
    PRIMARY KEY(tag_id)
);

CREATE TABLE User_Tag(
    tag_id INTEGER NOT NULL,
    user_id VARCHAR(64) NOT NULL,
    PRIMARY KEY(tag_id, user_id),
    FOREIGN KEY(tag_id) REFERENCES Tag(tag_id) ON DELETE CASCADE,
    FOREIGN KEY(user_id) REFERENCES User(user_id) ON UPDATE CASCADE
);

CREATE TABLE Post_Tag(
    tag_id INTEGER NOT NULL,
    post_id INTEGER NOT NULL,
    PRIMARY KEY(tag_id, post_id),
    FOREIGN KEY(tag_id) REFERENCES Tag(tag_id) ON DELETE CASCADE,
    FOREIGN KEY(post_id) REFERENCES Post(post_id) ON DELETE CASCADE
);

-- NOTIFICATION --
CREATE TABLE Notification(
    notification_id INTEGER NOT NULL AUTO_INCREMENT,
    user_id VARCHAR(64) NOT NULL,
    interactor_id VARCHAR(64),
    interactor_nickname VARCHAR(16),
    post_id INTEGER,
    reply_id INTEGER,
    notification_type INTEGER NOT NULL,
    notification_date DATETIME NOT NULL,
    notification_seen BOOLEAN NOT NULL DEFAULT 0,
    PRIMARY KEY(notification_id),
    FOREIGN KEY(user_id) REFERENCES User(user_id) ON UPDATE CASCADE,
    FOREIGN KEY(interactor_id) REFERENCES User(user_id) ON UPDATE CASCADE,
    FOREIGN KEY(post_id) REFERENCES Post(post_id) ON DELETE SET NULL,
    FOREIGN KEY(reply_id) REFERENCES Reply(reply_id) ON DELETE SET NULL
);
-- FAVOURITE QUESTION --
CREATE TABLE Favourite_Question(
    post_id INTEGER NOT NULL,
    user_id VARCHAR(64) NOT NULL,
    PRIMARY KEY(post_id, user_id),
    FOREIGN KEY(user_id) REFERENCES User(user_id) ON UPDATE CASCADE,
    FOREIGN KEY(post_id) REFERENCES Post(post_id) ON DELETE CASCADE
);

-- BLACKLIST --
CREATE TABLE Blacklisted_User(
    user_id VARCHAR(64) NOT NULL,
    PRIMARY KEY(user_id),
    FOREIGN KEY(user_id) REFERENCES User(user_id) ON UPDATE CASCADE
);