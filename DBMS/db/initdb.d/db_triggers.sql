-- /*
--     THIS FILE IS USED TO ADD TRIGGERS TO THE DATABASE
-- */
-- USE studyboard_db;

-- ------------ TRIGGERS ------------
-- LIKES --
-- UPDATE LIKE COUNT FOR POST AND USER WHEN A ROW IS ADDED TO User_Post_Like (One likes a post)
delimiter //
CREATE TRIGGER Post_Like AFTER INSERT ON User_Post_Like
FOR EACH ROW
BEGIN

    -- Get the user id of the target post to increment the author's like count
    SELECT user_id INTO @target_post_user_id FROM Post WHERE post_id = NEW.post_id;
    UPDATE User SET User.user_likes_received = User.user_likes_received+1 WHERE user_id = @target_post_user_id;

    -- Increment the like count on the post
    UPDATE Post SET Post.post_like_count = Post.post_like_count+1 WHERE post_id = NEW.post_id;
END //
delimiter ;

-- UPDATE LIKE COUNT FOR POST AND USER WHEN A ROW IS DELETED FROM User_Post_Like (One likes a post)
delimiter //
CREATE TRIGGER Post_Unlike AFTER DELETE ON User_Post_Like
FOR EACH ROW
BEGIN

    -- Get the user id of the target post to increment the author's like count
    SELECT user_id INTO @target_post_user_id FROM Post WHERE post_id = OLD.post_id;
    UPDATE User SET User.user_likes_received = User.user_likes_received-1 WHERE user_id = @target_post_user_id;

    -- Increment the like count on the post
    UPDATE Post SET Post.post_like_count = Post.post_like_count-1 WHERE post_id = OLD.post_id;
END //
delimiter ;

-- UPDATE LIKE COUNT FOR REPLY AND USER WHEN A ROW IS DELETED FROM User_Reply_Like (One likes a reply)
delimiter //
CREATE TRIGGER Reply_Like AFTER INSERT ON User_Reply_Like
FOR EACH ROW
BEGIN

    -- Get the user id of the target post to increment the author's like count
    SELECT user_id INTO @target_reply_user_id FROM Reply WHERE reply_id = NEW.reply_id;
    UPDATE User SET User.user_likes_received = User.user_likes_received+1 WHERE user_id = @target_reply_user_id;

    -- Increment the like count on the post
    UPDATE Reply SET Reply.reply_like_count = Reply.reply_like_count+1 WHERE reply_id = NEW.reply_id;
END //
delimiter ;

-- UPDATE LIKE COUNT FOR REPLY AND USER WHEN A ROW IS DELETED FROM User_Reply_Like (One likes a reply)
delimiter //
CREATE TRIGGER Reply_Unlike AFTER DELETE ON User_Reply_Like
FOR EACH ROW
BEGIN

    -- Get the user id of the target post to increment the author's like count
    SELECT user_id INTO @target_reply_user_id FROM Reply WHERE reply_id = OLD.reply_id;
    UPDATE User SET User.user_likes_received = User.user_likes_received-1 WHERE user_id = @target_reply_user_id;

    -- Increment the like count on the post
    UPDATE Reply SET Reply.reply_like_count = Reply.reply_like_count-1 WHERE reply_id = OLD.reply_id;
END //
delimiter ;

-- FAVOURITES --
-- UPDATE FAVOURITES COUNT FOR POST AND USER WHEN A ROW IS ADDED TO Favourite_Question (One favourites a post)
delimiter //
CREATE TRIGGER Post_Favourite AFTER INSERT ON Favourite_Question
FOR EACH ROW
BEGIN

    -- Increment the fav count on the post
    UPDATE Post SET Post.post_favourite_count = Post.post_favourite_count+1 WHERE post_id = NEW.post_id;
END //
delimiter ;

-- UPDATE FAVOURITES COUNT FOR POST AND USER WHEN A ROW IS DELETED FROM Favourite_Question (One un-favourites a post)
delimiter //
CREATE TRIGGER Post_Unfavourite AFTER DELETE ON Favourite_Question
FOR EACH ROW
BEGIN

    -- Increment the fav count on the post
    UPDATE Post SET Post.post_favourite_count = Post.post_favourite_count-1 WHERE post_id = OLD.post_id;
END //
delimiter ;

-- REPLY ADD / REMOVE --
-- UPDATE REPLY Count for post when reply has been added
delimiter //
CREATE TRIGGER Add_Reply AFTER INSERT ON Reply_To_Post
FOR EACH ROW
BEGIN

    -- Increment the like count on the post
    UPDATE Post SET Post.post_reply_count = Post.post_reply_count+1 WHERE post_id = NEW.post_id;
END //
delimiter ;

-- UPDATE REPLY COUNT FOR POST AND USER WHEN A ROW IS DELETED 
delimiter //
CREATE TRIGGER Remove_Reply AFTER DELETE ON Reply_To_Post
FOR EACH ROW
BEGIN

    -- Increment the like count on the post
    UPDATE Post SET Post.post_reply_count = Post.post_reply_count-1 WHERE post_id = OLD.post_id;
END //
delimiter ;

-- DELETE REPLIES TO REPLIES IF SOURCE REPLY IS DELETED
delimiter //
CREATE TRIGGER Cascade_Reply_To_Replies AFTER DELETE ON Reply_To_Post
FOR EACH ROW
BEGIN
    DELETE FROM Reply WHERE reply_id IN (SELECT reply_id FROM Reply_To_Reply WHERE source_id = OLD.reply_id);
END//
delimiter ;

-- RANK --
-- SET LIKE COUNT THRESHHOLD FOR ENDORSED STATUS
delimiter //
CREATE TRIGGER Set_Endorse_Trigger BEFORE UPDATE ON User
FOR EACH ROW
BEGIN
    IF NEW.user_likes_received > 10
    THEN SET NEW.user_is_endorsed=1;
    END IF;
END //
delimiter ;

-- NOTIFICATIONS --
-- CREATE NOTIFICATION WHEN A NEW REPLY IS POSTED TO A USER'S QUESTION
-- REPLIES
-- REPLY TO POST [0]
delimiter //
CREATE TRIGGER Noti_Post_Reply AFTER INSERT ON Reply_To_Post
FOR EACH ROW
BEGIN

    SELECT user_id INTO @target_post_user_id FROM Post WHERE post_id = NEW.post_id;
    SELECT user_id INTO @interactor_user_id FROM Reply WHERE reply_id = NEW.reply_id;
    SELECT user_nickname INTO @interactor_user_nickname FROM User WHERE user_id=@interactor_user_id;
    -- Increment the fav count on the post
    INSERT INTO Notification (user_id, interactor_nickname, post_id, notification_type, notification_date, reply_id) VALUES (@target_post_user_id, @interactor_user_nickname, NEW.post_id, 0, NOW(), NEW.reply_id);
END //
delimiter ;

-- REPLY TO REPLY [1]
delimiter //
CREATE TRIGGER Noti_Reply_Reply AFTER INSERT ON Reply_To_Reply
FOR EACH ROW
BEGIN

    SELECT user_id INTO @target_reply_user_id FROM Reply WHERE reply_id = NEW.source_id;
    SELECT user_id INTO @interactor_user_id FROM Reply WHERE reply_id = NEW.reply_id;
    SELECT user_nickname INTO @interactor_user_nickname FROM User WHERE user_id=@interactor_user_id;
    -- Increment the fav count on the post
    INSERT INTO Notification (user_id, interactor_nickname, post_id, notification_type, notification_date, reply_id) VALUES (@target_reply_user_id, @interactor_user_nickname, NEW.post_id, 1, NOW(), NEW.reply_id);
END //
delimiter ;

-- LIKES
-- LIKE TO POST [10]
delimiter //
CREATE TRIGGER Noti_Like_Post AFTER INSERT ON User_Post_Like
FOR EACH ROW
BEGIN

    SELECT user_id INTO @target_post_user_id FROM Post WHERE post_id = NEW.post_id;
    SELECT user_nickname INTO @interactor_user_nickname FROM User WHERE user_id=NEW.user_id;
    -- Increment the fav count on the post
    IF NOT (SELECT EXISTS(SELECT * FROM Notification WHERE post_id=NEW.post_id AND interactor_id=NEW.user_id))
    THEN INSERT INTO Notification (user_id, interactor_nickname, interactor_id, post_id, notification_type, notification_date) VALUES (@target_post_user_id, @interactor_user_nickname, NEW.user_id, NEW.post_id, 10, NOW());
    END IF;
    
END //
delimiter ;

-- LIKE TO REPLY [11]
delimiter //
CREATE TRIGGER Noti_Like_Reply AFTER INSERT ON User_Reply_Like
FOR EACH ROW
BEGIN

    SELECT user_id, reply_id INTO @target_reply_user_id, @target_reply_post_id FROM Reply WHERE reply_id = NEW.reply_id;
    SELECT post_id INTO @target_post_id FROM Reply_To_Post WHERE reply_id=@target_reply_post_id;
    SELECT user_nickname INTO @interactor_user_nickname FROM User WHERE user_id=NEW.user_id;
    IF NOT (SELECT EXISTS(SELECT * FROM Notification WHERE reply_id=NEW.reply_id AND interactor_id=NEW.user_id))
    THEN INSERT INTO Notification (user_id, interactor_nickname, interactor_id, post_id, notification_type, notification_date, reply_id) VALUES (@target_reply_user_id, @interactor_user_nickname, NEW.user_id, @target_post_id, 11, NOW(), NEW.reply_id);
    END IF;
    -- Increment the fav count on the post
    
END //
delimiter ;