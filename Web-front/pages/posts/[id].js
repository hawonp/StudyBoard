import * as React from "react";
import { useRef, useState, useEffect } from "react";
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
  const [isEdit, setIsEdit] = useState(false);
  const [postData, setPostData] = useState({
    id: "0",
    user: "USER",
    title: "TITLE",
    images: "IMAGES",
    text: "TEXT",
    tags: [],
  });
  useEffect(() => {
    axiosInstance
      .get(POSTDATAENDPOINT + "/" + router.query.id)
      .then((response) => {
        const responseData = JSON.parse(response["data"]);
        setPostData({
          id: responseData.post_id,
          user: responseData.user_nickname,
          title: responseData.post_title,
          text: responseData.post_text,
          images: responseData.post_image,
          tags: responseData.post_tags,
        });
      });
  }, []);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
        {isEdit ? (
          <Button
            title={"I want to edit"}
            onClick={() => setIsEdit(false)}
            sx={{ width: "100px", height: "50px" }}
          ></Button>
        ) : (
          <Button
            title={"I want to edit"}
            onClick={() => setIsEdit(true)}
            sx={{ width: "100px", height: "50px" }}
          ></Button>
        )}
        <Container sx={{ marginBottom: "16px", marginTop: "20px" }}>
          {isEdit ? (
            <EditPost postCard={postData} />
          ) : (
            <DetailPost postData={postData} />
          )}
        </Container>

        <Container>
          <DetailWrapper>
            <CommentBox />
          </DetailWrapper>
        </Container>
      </div>

      <ProfileCard />
    </div>
  );
}
