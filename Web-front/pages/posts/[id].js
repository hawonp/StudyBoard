import * as React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";
//Importing MUI
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import FlagIcon from "@mui/icons-material/Flag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ShareIcon from "@mui/icons-material/Share";
import CardActions from "@mui/material/CardActions";
import { Box } from "@mui/material";
import Button from "@mui/material/Button";

import axiosInstance from "../../utils/routeUtil";
import ProfileCard from "../../components/ProfileCard";
import PostEdit from "../../components/PostEdit";
import PostDetail from "../../components/PostDetail";
import { CommentBox } from "../../components/CommentBox";

const POSTDATAENDPOINT = "/posts";

//Need this to keep post id
export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

const DetailWrapper = ({ style, children }) => {
  return (
    <div
      style={{
        // alignItems: "center",
        border: "0.1rem solid lightgray",
        backgroundColor: "white",
        borderRadius: "8px",
        boxSizing: "border-box",
        padding: "10px 12px",
        ...style,
      }}
    >
      {" "}
      {children}{" "}
    </div>
  );
};

export default function PostDetailPage() {
  const router = useRouter();
  const { user, isLoading, error } = useUser();
  const [isEdit, setIsEdit] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(false);
  const [postData, setPostData] = useState({});
  let userID = "";
  if (user) {
    userID = user.sub;
  }
  //Load in  the post data upon render
  useEffect(() => {
    if (!isLoading && !error) {
      axiosInstance
        .get(POSTDATAENDPOINT + "/" + router.query.id, {
          params: { userID: userID },
        })
        .then((response) => {
          const responseData = JSON.parse(response["data"]);
          //Assign data according to whether the user liked the post
          console.log(responseData);
          setPostData({
            id: responseData["post_id"],
            user: responseData["user_nickname"],
            title: responseData["post_title"],
            text: responseData["post_text"],
            images: responseData["post_image"],
            tags: responseData["post_tags"],
            date: responseData["post_date"],
            user_id: responseData["user_id"],
            postLikeCount: responseData["post_like_count"],
            didUserLike: responseData["did_user_like_post"] != 0 ? true : false,
            didUserFavourite:
              responseData["did_user_favourite_post"] != 0 ? true : false,
          });
          setHasLoaded(true);
        });
    }
  }, [isEdit, isLoading]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  //Handle like press
  const handleLikePressed = () => {
    const requestEndpoint = POSTDATAENDPOINT + "/" + postData.id + "/likes";
    if (postData.didUserLike) {
      axiosInstance
        .delete(requestEndpoint, {
          params: {
            userID: userID,
          },
        })
        .then((response) => {
          setPostData((prevData) => {
            return {
              ...prevData,
              didUserLike: !prevData.didUserLike,
              postLikeCount: prevData.postLikeCount - 1,
            };
          });
        });
    } else {
      axiosInstance
        .post(requestEndpoint, {
          params: {
            userID: userID,
          },
        })
        .then((response) => {
          setPostData((prevData) => {
            return {
              ...prevData,
              didUserLike: !prevData.didUserLike,
              postLikeCount: prevData.postLikeCount + 1,
            };
          });
        });
    }
  };

  //Handle favourite press
  const handleFavouritePressed = () => {
    console.log(postData.didUserFavourite);
    const requestEndpoint = POSTDATAENDPOINT + "/" + postData.id + "/favourite";
    if (postData.didUserFavourite) {
      axiosInstance
        .delete(requestEndpoint, {
          params: {
            userID: userID,
          },
        })
        .then((response) => {
          setPostData((prevData) => {
            return {
              ...prevData,
              didUserFavourite: !prevData.didUserFavourite,
            };
          });
        });
    } else {
      axiosInstance
        .post(requestEndpoint, {
          params: {
            userID: userID,
          },
        })
        .then((response) => {
          setPostData((prevData) => {
            return {
              ...prevData,
              didUserFavourite: !prevData.didUserFavourite,
            };
          });
        });
    }
  };

  //Must not load when the following are true
  if (isLoading) return <div>Getting User Info...</div>;
  if (error) return <div>{error.message}</div>;

  //Render if the post has loaded
  if (!hasLoaded) {
    return <div> Loading... </div>;
  } else {
    return (
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
          <Container sx={{ marginBottom: "16px", marginTop: "20px" }}>
            {console.log(isEdit)}
            {isEdit ? (
              <PostEdit
                postCard={postData}
                finish={() => {
                  setIsEdit(false);
                  setHasLoaded(true);
                }}
              />
            ) : (
              <PostDetail
                postData={postData}
                onLikePressed={handleLikePressed}
                onFavouritePressed={handleFavouritePressed}
                edit={() => setIsEdit(true)}
              />
            )}
          </Container>
          {!isEdit && (
            <Container>
              <DetailWrapper>
                {/*comment*/}
                <CommentBox postID={postData.id} />
              </DetailWrapper>
            </Container>
          )}
        </div>

        {user && <ProfileCard />}
      </div>
    );
  }
}
