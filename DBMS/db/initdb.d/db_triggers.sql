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
    -- Get the user id of the target post to increment the author's like count. Depends on whether the interactor is endorsed or not
    SELECT user_id INTO @target_post_user_id FROM Post WHERE post_id = NEW.post_id;
    IF (SELECT EXISTS(SELECT * FROM User WHERE user_is_endorsed=1 AND user_id=NEW.user_id))
    THEN
        BEGIN
        UPDATE User SET User.user_likes_received = User.user_likes_received+2, User.user_rank_points = User.user_rank_points+2 WHERE user_id = @target_post_user_id;
        UPDATE Post SET Post.post_like_count = Post.post_like_count+2 WHERE post_id = NEW.post_id;
        END;
    ELSE
        BEGIN
        UPDATE User SET User.user_likes_received = User.user_likes_received+1, User.user_rank_points = User.user_rank_points+1 WHERE user_id = @target_post_user_id;
        UPDATE Post SET Post.post_like_count = Post.post_like_count+1 WHERE post_id = NEW.post_id;
        END;
    END IF;
END //
delimiter ;

-- UPDATE LIKE COUNT FOR POST AND USER WHEN A ROW IS DELETED FROM User_Post_Like (One likes a post)
delimiter //
CREATE TRIGGER Post_Unlike AFTER DELETE ON User_Post_Like
FOR EACH ROW
BEGIN
    -- Get the user id of the target post to increment the author's like count. Depends on whether the interactor is endorsed or not
    SELECT user_id INTO @target_post_user_id FROM Post WHERE post_id = OLD.post_id;
    IF (SELECT EXISTS(SELECT * FROM User WHERE user_is_endorsed=1 AND user_id=OLD.user_id))
    THEN
        BEGIN
        UPDATE User SET User.user_likes_received = User.user_likes_received-2, User.user_rank_points = User.user_rank_points-2 WHERE user_id = @target_post_user_id;
        UPDATE Post SET Post.post_like_count = Post.post_like_count-2 WHERE post_id = OLD.post_id;
        END;
    ELSE
        BEGIN
        UPDATE User SET User.user_likes_received = User.user_likes_received-1, User.user_rank_points = User.user_rank_points-1 WHERE user_id = @target_post_user_id;
        UPDATE Post SET Post.post_like_count = Post.post_like_count-1 WHERE post_id = OLD.post_id;
        END;
    END IF;
END //
delimiter ;

-- UPDATE LIKE COUNT FOR REPLY AND USER WHEN A ROW IS DELETED FROM User_Reply_Like (One likes a reply)
delimiter //
CREATE TRIGGER Reply_Like AFTER INSERT ON User_Reply_Like
FOR EACH ROW
BEGIN
    -- Get the user id of the target post to increment the author's like count. Depends on whether the interactor is endorsed or not
    SELECT user_id INTO @target_reply_user_id FROM Reply WHERE reply_id = NEW.reply_id;
    IF (SELECT EXISTS(SELECT * FROM User WHERE user_is_endorsed=1 AND user_id=NEW.user_id))
    THEN
        BEGIN
        UPDATE User SET User.user_likes_received = User.user_likes_received+2, User.user_rank_points = User.user_rank_points+2 WHERE user_id = @target_reply_user_id;
        UPDATE Reply SET Reply.reply_like_count = Reply.reply_like_count+2 WHERE reply_id = NEW.reply_id;
        END;
    ELSE
        BEGIN
        UPDATE User SET User.user_likes_received = User.user_likes_received+1, User.user_rank_points = User.user_rank_points+1 WHERE user_id = @target_reply_user_id;
        UPDATE Reply SET Reply.reply_like_count = Reply.reply_like_count+1 WHERE reply_id = NEW.reply_id;
        END;
    END IF;
END //
delimiter ;

-- UPDATE LIKE COUNT FOR REPLY AND USER WHEN A ROW IS DELETED FROM User_Reply_Like (One likes a reply)
delimiter //
CREATE TRIGGER Reply_Unlike AFTER DELETE ON User_Reply_Like
FOR EACH ROW
BEGIN
     -- Get the user id of the target post to decrement the author's like count. Depends on whether the interactor is endorsed or not
    SELECT user_id INTO @target_reply_user_id FROM Reply WHERE reply_id = OLD.reply_id;
    IF (SELECT EXISTS(SELECT * FROM User WHERE user_is_endorsed=1 AND user_id=OLD.user_id))
    THEN
        BEGIN
        UPDATE User SET User.user_likes_received = User.user_likes_received-2, User.user_rank_points = User.user_rank_points-2 WHERE user_id = @target_reply_user_id;
        UPDATE Reply SET Reply.reply_like_count = Reply.reply_like_count-2 WHERE reply_id = OLD.reply_id;
        END;
    ELSE
        BEGIN
        UPDATE User SET User.user_likes_received = User.user_likes_received-1, User.user_rank_points = User.user_rank_points-1 WHERE user_id = @target_reply_user_id;
        UPDATE Reply SET Reply.reply_like_count = Reply.reply_like_count-1 WHERE reply_id = OLD.reply_id;
        END;
    END IF;
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
    IF NEW.user_rank_points > 10 AND OLD.user_rank_points != NEW.user_rank_points
    THEN SET NEW.user_is_endorsed=1;
    ELSE SET NEW.user_is_endorsed=0;
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

    
END //
delimiter ;

-- Content reported and deleted [21]
delimiter //
CREATE TRIGGER Noti_Your_Content_Deleted BEFORE UPDATE ON User
FOR EACH ROW
BEGIN
    IF NEW.user_flags_received > OLD.user_flags_received
    THEN INSERT INTO Notification (user_id, notification_type, notification_date) VALUES (NEW.user_id, 21, NOW());
    END IF;
END //
delimiter ;

-- User promoted to [30]/ demoted from [31] / endorsed
delimiter //
CREATE TRIGGER Noti_User_Endorse BEFORE UPDATE ON User
FOR EACH ROW
BEGIN
    IF NEW.user_is_endorsed > OLD.user_is_endorsed
    THEN INSERT INTO Notification (user_id, notification_type, notification_date) VALUES (NEW.user_id, 30, NOW());
    ELSEIF NEW.user_is_endorsed < OLD.user_is_endorsed
    THEN INSERT INTO Notification (user_id, notification_type, notification_date) VALUES (NEW.user_id, 31, NOW());
    END IF;
END //
delimiter ;