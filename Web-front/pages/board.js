import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useUser } from "@auth0/nextjs-auth0";
//Importing MUI
import Container from "@mui/material/Container";

import ProfileCard from "../components/ProfileCard";
import PostNavigation from "../components/PostNavigation";
import PaginationButton from "../components/Pagination";
import CardShow from "../components/CardShow";
import FilterButton from "../components/FilterButton";

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

export default function Board() {
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
    // Add a request interceptor
    axiosInstance.interceptors.request.use((request) => {
      console.log("Starting Request", JSON.stringify(request, null, 2));
      return request;
    });

    axiosInstance.interceptors.response.use((response) => {
      console.log("Response:", JSON.stringify(response, null, 2));
      return response;
    });
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
          console.log(response);
          setIsDataLoading(false);
        })
        .catch((e) => {
          const resp = e.response;
          if (resp["status"] == 400) {
            // TODO temp redirection
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
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (isDataLoading) {
    return <div> Loading... </div>;
  } else {
    return (
      <div style={{ display: "flex" }}>
        <Container>
          <Head>
            <title>StudyBoard</title>
          </Head>

          {/*{!isBig && <div style={{ width: isBig ? '300px' : '100%', height: '500px', backgroundColor: 'red' }} />}*/}
          {/* {!isBig && <ProfileCard />} */}

          {/* Write Qeustion */}
          <PostNavigation />

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
              <CardShow key={post.post_id} post={post} />
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
        </Container>
        {isBig && user && <ProfileCard />}
      </div>
    );
  }
}
