import React, { useState, useEffect } from "react";
import Head from "next/head";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import ProfileCard from "../components/ProfileCard";
import Container from "@mui/material/Container";
import PostNavigation from "../components/PostNavigation";
import PaginationButton from "../components/Pagination";
import CardShow from "../components/CardShow";
import FilterButton from "../components/FilterButton";

//Importing and settings vars for axios parse
import axiosInstance from "../utils/routeUtil";
import { useMediaQuery } from "@mui/material";
const POST_FEED = "/feed/posts";

//popover
const options = ["Edit", "Delete"];

//Functions to handle sorts

export default function Board() {
  const [expanded, setExpanded] = useState(false);

  const isBig = useMediaQuery("(min-width:850px)");

  const [feedPage, setFeedPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [feedOrder, setFeedOrder] = useState(0);
  const [feedFilter, setFeedFilter] = useState("None");
  const [posts, setPosts] = useState([]);

  //Load posts when component mounts
  useEffect(() => {
    axiosInstance
      .get(POST_FEED, {
        params: {
          page: feedPage,
          order: feedOrder,
          filter: feedFilter,
        },
      })
      .then((response) => {
        setPosts(JSON.parse(response.data)["posts"]);
        setMaxPage(JSON.parse(response.data)["maxPageCount"]);
        console.log(response);
      });
  }, [feedPage, feedOrder, feedFilter]);

  const updatePage = (event, page) => {
    console.log(page);
    setFeedPage(page);
  };
  const updateOrder = (order) => {
    setFeedOrder(order);
  };

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

        {/*{!isBig && <div style={{ width: isBig ? '300px' : '100%', height: '500px', backgroundColor: 'red' }} />}*/}
        {!isBig && <ProfileCard />}

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
          <FilterButton handleSortClick={updateOrder} />
        </div>

        <div>
          {/*Pre view user post Card*/}
          {posts.map((post) => (
            <CardShow key={post.post_id} post={post} />
          ))}
        </div>

        {/*pagnation*/}
        <div style={{ marginTop: "2rem" }}>
          <PaginationButton
            page={feedPage}
            setPage={updatePage}
            maxPageCount={maxPage}
          />
        </div>
      </Container>

      {/*{isBig && <div style={{ width: isBig ? '300px' : '100%', backgroundColor: 'red' }} />}*/}
      {isBig && <ProfileCard />}
    </div>
  );
}
