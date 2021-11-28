import React from "react";
import Link from "next/link";

const HashtagWrapper = ({ style, children }) => {
  return (
    <div
      style={{
        padding: "4px 15px",
        fontSize: "13px",
        color: "#3F8CB8",
        background: "#E1ECF4",
        borderRadius: "4px",
        marginRight: "4px",
        marginBottom: "2px",
        ...style,
      }}
    >
      {" "}
      {children}{" "}
    </div>
  );
};

// 해시태그 정규표현식
// HashTag Link Components
const CardTags = ({ tags }) => (
  <div
    style={{
      display: "flex",
      flexFlow: "row wrap",
      justifyContent: "start",
      marginTop: "0.5rem",
    }}
  >
    {tags.map((tag) => {
      return (
        <Link href={`/hashtag/${tag}`} key={tag}>
          <a style={{ textDecoration: "none" }}>
            <HashtagWrapper>{tag}</HashtagWrapper>
          </a>
        </Link>
      );
    })}
  </div>
);

export default CardTags;
