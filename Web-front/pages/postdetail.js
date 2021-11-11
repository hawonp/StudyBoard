import Container from "@mui/material/Container";
import ProfileCard from "../components/ProfileCard";
import * as React from "react";
import Link from "next/link";
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
import { useRef, useState } from "react";
import EditPost from "../components/EditPost";
import DetailPost from "../components/DetailPost";
import { CommentBox } from "../components/CommentBox";

const dummy_prop = {
  id: "1",
  user: "pk",
  title: "Dummy Data title",
  images:
    "https://woulduin.com/assets/users/_meta/2021/07/18/39bd9107-13df-4172-af6a-3674215d3054_KakaoTalk_20210717_191956085.gif",
  content: "Dummy Data Content",
  tags: "#math",
};

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

export default function Detail() {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
        {isEdit ? (
          <Button
            title={"I want to edit"}
            onClick={() => setIsEdit(false)}
            sx={{ width: "100px", height: "50px" }}
          >
            수정 취소
          </Button>
        ) : (
          <Button
            title={"I want to edit"}
            onClick={() => setIsEdit(true)}
            sx={{ width: "100px", height: "50px" }}
          >
            수정하기
          </Button>
        )}
        <Container sx={{ marginBottom: "16px", marginTop: "20px" }}>
          {isEdit ? (
            <EditPost postCard={dummy_prop} />
          ) : (
            <DetailPost postData={dummy_prop} />
          )}
        </Container>

        {/*comment section*/}
        {/*<Container sx={{display: 'flex'}} >*/}
        {/*    <div style={{ alignItems: 'center',border:'0.1rem solid lightgray',backgroundColor: 'white',*/}
        {/*        borderRadius: '8px',boxSizing: 'border-box',flex:1,marginBottom: '16px', marginTop: '20px', padding: '10px 12px' }}*/}
        {/*    >*/}
        {/*        <TextField*/}
        {/*            fullWidth*/}
        {/*            id="outlined-multiline-static"label="Comment" multiline rows={4}/>*/}
        {/*        <div style={{ display: 'flex', flex: 1, justifyContent:'end', marginTop: '0.5rem' }}>*/}
        {/*            <Button sx={{borderRadius: '8px',}} variant="contained" color="success">Comment</Button>*/}
        {/*        </div>*/}
        {/*    </div>*/}
        {/*</Container>*/}

        <Container>
          <DetailWrapper>
            {/*comment*/}
            <CommentBox />
          </DetailWrapper>
        </Container>
      </div>

      <ProfileCard />
    </div>
  );
}
