// react imports
import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

// MUI imports
import { Box } from "@mui/material";
import Link from "next/link";
import { TextField } from "@mui/material";
import { useMediaQuery } from "@mui/material";

// package imports
import { useUser } from "@auth0/nextjs-auth0";
import ProfileCard from "../components/user/ProfileCard";
import PaginationButton from "../components/feed/Pagination";
import PostPreview from "../components/feed/PostPreview";
import FilterButton from "../components/feed/FilterButton";
import LoadingProgress from "../components/utils/Loading";
import axiosInstance from "../utils/routeUtil";

// PageNav styling
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

// FilterBox styling
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

// constants
const POSTFEEDENDPOINT = "/feed/posts";

// functional component that renders the feed page
export default function Feed() {
  const isBig = useMediaQuery("(min-width:850px)"); // sets the maximum image size
  const { user, isLoading, error } = useUser(); // user session data from auth0
  const [feedPage, setFeedPage] = useState(1); // pagination state (default to page 1)
  const [maxPage, setMaxPage] = useState(1); // pagination state (default of one page)
  const [feedOrder, setFeedOrder] = useState(0); // state for determining the ordering of the posts
  const [feedFilter, setFeedFilter] = useState(0); // state for filtering the posts
  const [posts, setPosts] = useState([]); // holds the post data
  const [isDataLoading, setIsDataLoading] = useState(true); // determines status of data crawling
  const router = useRouter(); // used for redirection

  //Load posts when component mounts
  useEffect(() => {
    if (!isLoading && !error) {
      let userID = "";
      if (user) {
        userID = user.sub;
      }
      axiosInstance
        .get(POSTFEEDENDPOINT, {
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
          setIsDataLoading(false);
        })
        .catch((e) => {
          const resp = e.response;
          console.log(resp);
          if (resp["status"] == 400) {
            alert("could not load data");
          }
        });
    }
  }, [feedPage, feedOrder, feedFilter, isLoading]);

  // action handling for updating the page (order, filtering)
  const updatePage = (event, page) => {
    setFeedPage(page);
  };
  const updateOrder = (order) => {
    setFeedOrder(order);
  };
  const updateFilter = (filterOption) => {
    setFeedFilter(filterOption);
  };

  // user session data is loading
  if (isLoading) return <LoadingProgress />;
  if (error) return <div>{error.message}</div>;

  // data loading in from backend
  if (isDataLoading) {
    return <LoadingProgress />;
  }
  // all data has loaded in
  else {
    return (
      <div style={{ display: "flex" }}>
        <Box sx={{ flex: 1, marginLeft: "20px", marginRight: "20px" }}>
          <Head>
            <title>StudyBoard</title>
          </Head>

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
} // functional component closure
