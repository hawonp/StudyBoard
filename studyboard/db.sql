------------ DATABASE INITIALISATION ------------
DROP DATABASE IF EXISTS studyboard_db;

CREATE DATABASE studyboard_db;

CREATE USER 'studyboardMod'@'localhost' IDENTIFIED by 'pashword';

GRANT ALL PRIVILEGES ON studyboard_db.* to 'studyboardMod'@'localhost' idetified by 'pashword';

USE studyboard_db;

------------ TABLES ------------
/*
INITIALISING TABLES
*/
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
    FOREIGN KEY (source_id) REFERENCES Reply(source_id),
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

------------ TRIGGERS ------------
-- UPDATE LIKE COUNT FOR POST AND USER WHEN A ROW IS ADDED TO User_Post_Like (One likes a post) --
delimiter //
CREATE TRIGGER Post_Like AFTER INSERT ON User_Post_Like
FOR EACH ROW
BEGIN

    -- Get the user id of the target post to increment the author's like count
    SELECT user_id INTO @target_post_user_id FROM Post WHERE user_id = NEW.post_id;
    UPDATE User SET User.user_likes_received = User.user_likes_received+1 WHERE user_id = @target_post_user_id;

    -- Increment the like count on the post
    UPDATE Post SET Post.post_like_count = Post.post_like_count+1 WHERE post_id = NEW.post_id;
END; //
delimiter ;


-- NOTIFICATIONS --