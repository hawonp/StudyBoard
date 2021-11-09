import React, { useState, useEffect } from "react";
import Head from "next/head";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import ProfileCard from "../components/ProfileCard";
import Container from "@mui/material/Container";
import PostNavigation from "../components/PostNavigation";
import PaginationButton from "../components/Pagination";
import CardShow from "../components/CardShow";

//Importing axois for HTTP req
import axios from "axios";
// const baseURL = "https://backend.studyboard.info/posts";
const baseURL = "http://localhost:5000/posts";

//popover
const options = ["Edit", "Delete"];

const ITEM_HEIGHT = 48;

export default function Board() {
  const [expanded, setExpanded] = React.useState(false);
  // const [page, setPage] = useState(1); //State to store data
  // const [post, setPost] = useState(null); //State to store data

  // //Load posts when component mounts
  // useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     setPost(response.data);
  //     console.log(response);
  //   });
  // });

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  //popover
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ display: "flex" }}>
      <Container>
        <Head>
          <title>StudyBoard</title>
        </Head>

        {/* Write Qeustion */}
        <PostNavigation />

        {/*filter*/}
        <div
          style={{
            alignItems: "center",
            backgroundColor: "white",
            border: "0.1rem solid lightgray",
            borderRadius: "4px",
            boxSizing: "border-box",
            display: "flex",
            marginBottom: "16px",
            padding: "10px 12px",
          }}
        >
          <Stack direction="row" spacing={1}>
            <Chip
              label="Recently"
              component="a"
              href="#basic-chip"
              variant="outlined"
              clickable
            />
            <Chip
              label="Most popular"
              component="a"
              href="#basic-chip"
              variant="outlined"
              clickable
            />
            <Chip
              label="preferred tags"
              component="a"
              href="#basic-chip"
              variant="outlined"
              clickable
            />
          </Stack>
        </div>

        <div>
          <CardShow />
        </div>

        {/*pagnation*/}
        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <PaginationButton />
        </div>
      </Container>

      <ProfileCard />
    </div>
  );
}
