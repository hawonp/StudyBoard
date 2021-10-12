import React, { useState, useCallback } from 'react';
import { Card, Button, Avatar, Popover, List, Comment } from 'antd';
import PropTypes from 'prop-types';
import { RetweetOutlined, HeartTwoTone, HeartOutlined, MessageOutlined, EllipsisOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

// 커맨트폼
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent';
import PostImages from './PostImages';
import { REMOVE_POST_REQUEST } from '../reducers/post';
import FollowButton from './FollowButton';

const CardWrapper = styled.div`
  margin-bottom: 20px;
`;

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const id = useSelector((state) => state.user.me && state.user.me.id);
  const [liked, setLiked] = useState(false);
  // const { me } = useSelector((state) => state.user);

  // 좋아요를 눌르고 때고 하는부분
  const onToggleLike = useCallback(() => {
    setLiked((prev) => !prev);
  }, []);

  const onRemovePost = useCallback(() => {
    dispatch({
      type: REMOVE_POST_REQUEST,
      data: post.id,

    });
  });

  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);

  return (
    <CardWrapper key={post.id} style={{ paddingTop: '20px' }}>
      <Card
        title="Question"
        style={{ border: '2px inset ', boxShadow: 'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px rgba(6, 24, 44, 0.65) 0px 4px 6px -1px rgba(255, 255, 255, 0.08) 0px 1px 0px inset' }}
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key="retweet" />,
          liked
            ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike} />
            : <HeartOutlined key="heart" onClick={onToggleLike} />,
          <MessageOutlined key="message" onClick={onToggleComment} />,
          <Popover
            key="ellipsis"
            content={(
              <Button.Group>
                {id && post.User.id === id
                  ? (
                    <>
                      <Button>Edit</Button>
                      <Button type="danger" onClick={onRemovePost}>Delete</Button>
                    </>
                  )
                  : <Button>Report</Button>}
              </Button.Group>
                        )}
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
        // 우측상단에 만들어주는 extra
        extra={id && <FollowButton post={post} />}

      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]} </Avatar>}
          title={post.User.nickname}
            // 해시테그
          description={<PostCardContent postData={post.content} />}
        />
        <div style={{ position: 'absolute', left: '10px', top: '1000px', color: 'darkyellow' }}>
          <FontAwesomeIcon icon={faStar} />
        </div>

      </Card>
      {commentFormOpened && (
        <>
          {/* 뎃글을 작성할때 게시글에 속해있으니 정보가 필요하다 게시글의 아이디가 필요하다 */}
          <CommentForm post={post} />
          <List
            header={`${post.Comments ? post.Comments.length : 0} 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comments || []}
            renderItem={(item) => (
              <li>
                {/* 엔트디에 커맨트라고 준비해둠 */}
                <Comment
                    // 누가썼는지
                  author={item.User.nickname}
                    // 유저 아바타
                  avatar={(
                    <Link href={{ pathname: '/user', query: { id: item.User.id } }} as={`/user/${item.User.id}`}>
                      <a><Avatar>{item.User.nickname[0]}</Avatar></a>
                    </Link>
                                    )}
                  content={item.content}
                />
              </li>
            )}
          />
        </>
      )}
    </CardWrapper>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    UserId: PropTypes.number,
    content: PropTypes.string,
    createdAt: PropTypes.object,
    Comments: PropTypes.arrayOf(PropTypes.any),
    Images: PropTypes.arrayOf(PropTypes.any),
  }).isRequired,
};

export default PostCard;
