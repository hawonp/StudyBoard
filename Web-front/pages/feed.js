// react imports
import React, { useState, useEffect } from "react";
import Head from "next/head";

// MUI imports
import { Box } from "@mui/material";
import Link from "next/link";
import { TextField } from "@mui/material";

// package imports
import { useUser } from "@auth0/nextjs-auth0";
import ProfileCard from "../components/user/ProfileCard";
import PaginationButton from "../components/feed/Pagination";
import PostPreview from "../components/feed/PostPreview";
import FilterButton from "../components/feed/FilterButton";
import LoadingProgress from "../components/utils/Loading";

//
const PageNav = ({ style, children }) => {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flex: "1",
        justifyContent: "center",
        marginTop: "2rem",
        marginBottom: "2rem",
        ...style,
      }}
    >
      {" "}
      {children}{" "}
    </div>
  );
};

const FilterBox = ({ style, children }) => {
  return (
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
        ...style,
      }}
    >
      {" "}
      {children}{" "}
    </div>
  );
};

//Importing and settings vars for axios parse
import axiosInstance from "../utils/routeUtil";
import { useMediaQuery } from "@mui/material";
const POST_FEED = "/feed/posts";

//popover
const options = ["Edit", "Delete"];

//Functions to handle sorts

export default function Feed() {
  const [expanded, setExpanded] = useState(false);
  const isBig = useMediaQuery("(min-width:850px)");
  const { user, isLoading, error } = useUser();
  const [feedPage, setFeedPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [feedOrder, setFeedOrder] = useState(0);
  const [feedFilter, setFeedFilter] = useState(0);
  const [posts, setPosts] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);

  //Load posts when component mounts
  useEffect(() => {
    if (!isLoading && !error) {
      let userID = "";
      if (user) {
        userID = user.sub;
      }
      axiosInstance
        .get(POST_FEED, {
          params: {
            userID: userID,
            page: feedPage,
            order: feedOrder,
            filter: feedFilter,
          },
        })
        .then((response) => {
          setPosts(JSON.parse(response.data)["posts"]);
          setMaxPage(JSON.parse(response.data)["maxPageCount"]);
          // console.log(response);
          setIsDataLoading(false);
        })
        .catch((e) => {
          const resp = e.response;
          if (resp["status"] == 400) {
            alert("could not load data");
          }
        });
    }
  }, [feedPage, feedOrder, feedFilter, isLoading]);

  const updatePage = (event, page) => {
    console.log("page", page);
    setFeedPage(page);
  };
  const updateOrder = (order) => {
    setFeedOrder(order);
  };
  const updateFilter = (filterOption) => {
    setFeedFilter(filterOption);
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
  if (isLoading) return <LoadingProgress />;
  if (error) return <div>{error.message}</div>;

  if (isDataLoading) {
    return <LoadingProgress />;
  } else {
    return (
      <div style={{ display: "flex" }}>
        <Box sx={{ flex: 1, marginLeft: "20px", marginRight: "20px" }}>
          <Head>
            <title>StudyBoard</title>
          </Head>

          {/*{!isBig && <div style={{ width: isBig ? '300px' : '100%', height: '500px', backgroundColor: 'red' }} />}*/}
          {/* {!isBig && <ProfileCard />} */}

          {/* Write Question */}
          <div
            style={{
              alignItems: "center",
              border: "0.1rem solid lightgray",
              backgroundColor: "white",
              borderRadius: "8px",
              boxSizing: "border-box",
              display: "flex",
              marginBottom: "16px",
              marginTop: "20px",
              padding: "10px 12px",
            }}
          >
            <Box
              component="form"
              sx={{
                width: "100%",
                maxWidth: "100%",
              }}
              noValidate
              autoComplete="off"
            >
              <Link href="/user/write">
                <TextField
                  fullWidth
                  id="standard-basic"
                  label="Ask a Question!"
                  variant="standard"
                />
              </Link>
            </Box>
          </div>
          {/*filter*/}
          <FilterBox>
            <FilterButton
              user={user}
              handleSortClick={updateOrder}
              handleFilterChange={updateFilter}
              filter={feedFilter}
            />
          </FilterBox>

          <div>
            {/*Pre view user post Card*/}
            {posts.map((post) => (
              <PostPreview key={post.post_id} post={post} />
            ))}
          </div>

          {/*pagnation*/}
          <PageNav>
            <PaginationButton
              page={feedPage}
              setPage={updatePage}
              maxPageCount={maxPage}
            />
          </PageNav>
        </Box>
        {isBig && user && <ProfileCard />}
      </div>
    );
  }
}
