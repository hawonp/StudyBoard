// react imports
import React from "react";
import Link from "next/link";

// HashTagWrapper styling
const HashtagWrapper = ({ style, children }) => {
  return (
    <div
      style={{
        padding: "2px 6px",
        fontSize: "13px",
        color: "#3F8CB8",
        background: "#E1ECF4",
        borderRadius: "4px",
        marginRight: "4px",
        ...style,
      }}
    >
      {" "}
      {children}{" "}
    </div>
  );
};

// HashTag Link Components
const PostPreviewTags = ({ tags }) => (
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
        <Link href={`/tags/${tag}`} key={tag}>
          <a style={{ textDecoration: "none" }}>
            <HashtagWrapper>{tag}</HashtagWrapper>
          </a>
        </Link>
      );
    })}
  </div>
); // functional component closure

export default PostPreviewTags;
