import * as React from "react";
import { useEffect, useState } from "react";
import { useUser } from "@auth0/nextjs-auth0";
//Importing MUI
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import ProfileCard from "../../components/ProfileCard";
import FavoriteCard from "../../components/FavoriteCard";

import axiosInstance from "../../utils/routeUtil";

const FAVOURITEENDPOINT = "/favourite";
const USERS = "/users";

const BoxWrapper = ({ style, children }) => {
  return (
    <div
      style={{
        minWidth: "750px",
        display: "flex",
        flexWrap: "wrap",
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

export default function Favorite() {
  const [favorites, setFavorites] = useState([]);
  const { user, isLoading, error } = useUser();
  const [isDataLoading, setIsDataLoading] = useState(true);

  useEffect(() => {
    if (!isLoading && !error) {
      let userID = "";
      if (user) {
        userID = user.sub;
      }
      axiosInstance
        .get(USERS + "/" + userID + FAVOURITEENDPOINT)
        .then((response) => {
          setFavorites(JSON.parse(response.data));
          setIsDataLoading(false);
        });
    }
  }, [isLoading]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (isDataLoading) {
    return <div> Loading... </div>;
  } else {
    return (
      <div style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <Container>
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
              <h5 style={{ marginBottom: "2rem" }}>My Favorite Posts</h5>
              <LineWrapper />
              {/*고정되는거가 minwidth , */}
              <BoxWrapper>
                {favorites.map((post) => (
                  <FavoriteCard key={post.post_id} favorite={post} />
                ))}
              </BoxWrapper>
            </Box>
          </Container>
        </div>

        <ProfileCard />
      </div>
    );
  }
}
