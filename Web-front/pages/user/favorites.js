// react imports
import * as React from "react";
import { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";

// MUI imports
import Box from "@mui/material/Box";
import ReportGmailerrorredOutlinedIcon from "@mui/icons-material/ReportGmailerrorredOutlined";

// package imports
import ProfileCard from "../../components/user/ProfileCard";
import LoadingProgress from "../../components/utils/Loading";
import axiosInstance from "../../utils/routeUtil";
import PostMinified from "../../components/misc/PostMinified";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

// constants
const FAVOURITEENDPOINT = "/favourite";
const USERSENDPOINT = "/users/";

// BoxWrapper styling
const BoxWrapper = ({ style, children }) => {
  return (
    <div
      style={{
        minWidth: "750px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "space-around",
        ...style,
      }}
    >
      {" "}
      {children}{" "}
    </div>
  );
};

// LineWrapper styling
const LineWrapper = ({ style, children }) => {
  return (
    <div
      style={{
        margin: "0px",
        flexShrink: "0",
        borderWidth: "0px 0px thin",
        borderStyle: "solid",
        marginBottom: "16px",
        opacity: 1,
        borderColor: "lightgray",
        ...style,
      }}
    >
      {" "}
      {children}{" "}
    </div>
  );
};

// functional component that renders the user's currently favorite post list
export default withPageAuthRequired(function Favorites() {
  const [favorites, setFavorites] = useState([]); // stores the list of favorite posts
  const { user, isLoading, error } = useUser(); // user session data from Auth0
  const [isDataLoading, setIsDataLoading] = useState(true); // determines current state of data loading

  // load in data from backend
  useEffect(() => {
    if (!isLoading && !error) {
      let userID = "";
      if (user) {
        userID = user.sub;
      }
      axiosInstance
        .get(USERSENDPOINT + userID + FAVOURITEENDPOINT)
        .then((response) => {
          setFavorites(JSON.parse(response.data));
          setIsDataLoading(false);
        })
        .catch((e) => {
          const resp = e.response;
          if (resp["status"] == 500) {
            router.push("/" + "error/500");
          }
        });
    }
  }, [isLoading]);

  // user session is loading
  if (isLoading) return <LoadingProgress />;
  if (error) return <div>{error.message}</div>;

  // data still loading from backend
  if (isDataLoading) {
    return <LoadingProgress />;
  }
  // there are no favorites to display
  else if (favorites.length === 0) {
    return (
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <Box sx={{ marginLeft: "20px", marginRight: "20px" }}>
            <Box
              style={{
                border: "0.1rem solid lightgray",
                borderRadius: "8px",
                marginBottom: "16px",
                marginTop: "20px",
                padding: "10px 12px",
                backgroundColor: "white",
              }}
            >
              <h5
                style={{
                  marginBottom: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "1rem",
                }}
              >
                Favorites
              </h5>
              <LineWrapper />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "60px",
                  paddingTop: "30px",
                  paddingBottom: "30px",
                }}
              >
                <ReportGmailerrorredOutlinedIcon
                  sx={{ fontSize: "7.2rem", color: "lightgray" }}
                />
                <div style={{ fontSize: "0.8rem", color: "#B0B0B0" }}>
                  No Favorites
                </div>
              </Box>
            </Box>
          </Box>
        </div>

        <ProfileCard />
      </div>
    );
  }
  // all data has loaded in, there are favorites to display
  else {
    return (
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <Box sx={{ marginLeft: "20px", marginRight: "20px" }}>
            <Box
              style={{
                border: "0.1rem solid lightgray",
                borderRadius: "8px",
                marginBottom: "16px",
                marginTop: "20px",
                padding: "10px 12px",
                backgroundColor: "white",
              }}
            >
              <h5
                style={{
                  marginBottom: "2rem",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "1rem",
                }}
              >
                Favorites
              </h5>
              <LineWrapper />
              <BoxWrapper>
                {favorites.map((post) => (
                  <PostMinified key={post.post_id} data={post} />
                ))}
              </BoxWrapper>
            </Box>
          </Box>
        </div>

        <ProfileCard />
      </div>
    );
  }
}); // functional component closure
