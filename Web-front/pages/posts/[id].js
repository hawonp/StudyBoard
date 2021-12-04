// react imports
import * as React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";
import LoadingProgress from "../../components/utils/Loading";

// MUI imports
import { Box } from "@mui/material";

// package imports
import axiosInstance from "../../utils/routeUtil";
import ProfileCard from "../../components/user/ProfileCard";
import PostEditing from "../../components/post/PostEditing";
import PostDetail from "../../components/post/PostDetail";
import { ReplyCard } from "../../components/post/PostReplies";
const POSTDATAENDPOINT = "/posts";

//Need this to keep post id
export async function getServerSideProps(context) {
  return {
    props: {},
  };
}

// DetailWrapper styling
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

// functional component that renders the dynamic router for post details
export default function PostDetailPage() {
  const router = useRouter(); // used for redirection
  const { user, isLoading, error } = useUser(); // user session data from Auth0
  const [isEdit, setIsEdit] = useState(false); // keeps track of the editing state
  const [hasLoaded, setHasLoaded] = useState(false); // keeps track of whether or not the data from the backend has loaded
  const [postData, setPostData] = useState({}); // holds the individual post data

  // recieve current session's user_id if logged in
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
            user_is_endorsed: responseData["user_is_endorsed"],
            didUserLike: responseData["did_user_like_post"] != 0 ? true : false,
            didUserFavourite:
              responseData["did_user_favourite_post"] != 0 ? true : false,
          });
          setHasLoaded(true);
        })
        .catch((e) => {
          const resp = e.response;
          if (resp["status"] == 404) {
            router.push("/" + "error/404");
          }
        });
    }
  }, [isEdit, isLoading]);

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
        })
        .catch((e) => {
          const resp = e.response;
          if (resp["status"] == 500) {
            router.push("/" + "error/500");
          }
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
        })
        .catch((e) => {
          const resp = e.response;
          if (resp["status"] == 500) {
            router.push("/" + "error/500");
          }
        });
    }
  };

  //Handle favourite press
  const handleFavouritePressed = () => {
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
        })
        .catch((e) => {
          const resp = e.response;
          if (resp["status"] == 500) {
            router.push("/" + "error/500");
          }
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
        })
        .catch((e) => {
          const resp = e.response;
          if (resp["status"] == 500) {
            router.push("/" + "error/500");
          }
        });
    }
  };

  // user session is loading
  if (isLoading) return <LoadingProgress />;
  if (error) return <div>{error.message}</div>;

  // post data is loading
  if (!hasLoaded) {
    return <LoadingProgress />;
  }
  // user session data and  post data has both loaded
  else {
    return (
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
          <Box
            sx={{
              marginBottom: "16px",
              marginTop: "20px",
              marginLeft: "20px",
              marginRight: "20px",
            }}
          >
            {isEdit ? (
              <PostEditing
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
          </Box>
          {!isEdit && (
            <Box sx={{ marginLeft: "20px", marginRight: "20px" }}>
              <DetailWrapper>
                {/*comment*/}
                <ReplyCard postID={postData.id} />
              </DetailWrapper>
            </Box>
          )}
        </div>

        {user && <ProfileCard />}
      </div>
    );
  }
} // functional component closure
