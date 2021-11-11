import React, { useState, useEffect } from "react";
import Head from "next/head";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import ProfileCard from "../components/ProfileCard";
import Container from "@mui/material/Container";
import PostNavigation from "../components/PostNavigation";
import PaginationButton from "../components/Pagination";
import CardShow from "../components/CardShow";

//Importing and settings vars for axios parse
import axiosInstance from "../utils/routeUtil";
const postFeed = "/feed/posts";

//popover
const options = ["Edit", "Delete"];

const ITEM_HEIGHT = 48;

export default function Board() {
  const [expanded, setExpanded] = React.useState(false);
  const [feedPage, setPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [feedOrder, setFeedOrder] = useState("newest");
  const [feedFilter, setFeedFilter] = useState("None");
  const [posts, setPosts] = useState([]);

  //Load posts when component mounts
  useEffect(() => {
    axiosInstance
      .get(postFeed, {
        params: {
          page: feedPage,
          order: feedOrder,
          filter: feedFilter,
        },
      })
      .then((response) => {
        setPosts(JSON.parse(response.data)["posts"]);
        setMaxPage(JSON.parse(response.data)["maxPageCount"]);
      });
  }, []);

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
          {posts.map((post) => (
            <CardShow key={post.post_id} post={post} />
          ))}
        </div>

        {/*pagnation*/}
        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <PaginationButton maxPageCount={maxPage} />
        </div>
      </Container>

      <ProfileCard />
    </div>
  );
}
