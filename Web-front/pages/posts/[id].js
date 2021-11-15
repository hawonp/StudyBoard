import * as React from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Cookies from "universal-cookie";
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
import EditPost from "../../components/EditPost";
import DetailPost from "../../components/DetailPost";
import { CommentBox } from "../../components/CommentBox";

const cookies = new Cookies();
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
        alignItems: "center",
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
  let userID = cookies.get("user_id");
  console.log(userID);
  if (userID == undefined) {
    userID = -1;
  }
  const [isEdit, setIsEdit] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [postData, setPostData] = useState({
    id: "-1",
    user: "USER",
    title: "TITLE",
    text: "TEXT",
    images: "IMAGES",
    tags: ["TAG1", "TAG2"],
    date: "DATE",
    didUserLike: false,
    didUserFavourite: false,
  });

  //Load in  the post data upon render
  useEffect(() => {
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
          didUserLike: responseData["did_user_like_post"] != 0 ? true : false,
          didUserFavourite:
            responseData["did_user_favourite_post"] != 0 ? true : false,
        });
        setIsLoading(false);
      });
  }, [isLoading]);

  //Handle like press
  const handleLikePressed = () => {
    const id = cookies.get("user_id");
    const requestEndpoint = POSTDATAENDPOINT + "/" + postData.id + "/likes";
    if (postData.didUserLike) {
      axiosInstance
        .delete(requestEndpoint, {
          params: {
            userID: id,
          },
        })
        .then((response) => {
          console.log(response);
          setPostData((prevData) => {
            return { ...prevData, didUserLike: !prevData.didUserLike };
          });
        });
    } else {
      axiosInstance
        .post(requestEndpoint, {
          params: {
            userID: id,
          },
        })
        .then((response) => {
          console.log(response);
          setPostData((prevData) => {
            return { ...prevData, didUserLike: !prevData.didUserLike };
          });
        });
    }
  };

  //Handle favourite press
  const handleFavouritePressed = () => {
    console.log(postData.didUserFavourite);
    const id = cookies.get("user_id");
    const requestEndpoint = POSTDATAENDPOINT + "/" + postData.id + "/favourite";
    if (postData.didUserFavourite) {
      axiosInstance
        .delete(requestEndpoint, {
          params: {
            userID: id,
          },
        })
        .then((response) => {
          console.log(response);
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
            userID: id,
          },
        })
        .then((response) => {
          console.log(response);
          setPostData((prevData) => {
            return {
              ...prevData,
              didUserFavourite: !prevData.didUserFavourite,
            };
          });
        });
    }
  };

  //Render if the post has loaded
  if (isLoading) {
    return <div> Loading... </div>;
  } else {
    return (
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
          <Container sx={{ marginBottom: "16px", marginTop: "20px" }}>
            {console.log(isEdit)}
            {isEdit ? (
              <EditPost postCard={postData} finish={() => setIsEdit(false)} />
            ) : (
              <DetailPost
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
                <CommentBox />
              </DetailWrapper>
            </Container>
          )}
        </div>

        <ProfileCard />
      </div>
    );
  }
}
