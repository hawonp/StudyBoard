/*
    THIS FILE IS USED TO ADD TRIGGERS TO THE DATABASE
*/
USE studyboard_db;

------------ TRIGGERS ------------
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
END; //
delimiter ;

delimiter //
CREATE TRIGGER Reply_Like AFTER INSERT ON User_Reply_Like
FOR EACH ROW
BEGIN

    -- Get the user id of the target post to increment the author's like count
    SELECT user_id INTO @target_reply_user_id FROM Reply WHERE reply_id = NEW.reply_id;
    UPDATE User SET User.user_likes_received = User.user_likes_received+1 WHERE user_id = @target_reply_user_id;

    -- Increment the like count on the post
    UPDATE Reply SET Reply.reply_like_count = Reply.reply_like_count+1 WHERE reply_id = NEW.reply_id;
END; //
delimiter ;

-- NOTIFICATIONS --