import React from "react";
import { TagInterface } from "./types";

const Tag: React.FC<TagInterface> = (props) => {
  return (
    <div
      className="tag"
      style={{
        backgroundColor: `$${props.backgroundColor}`,
      }}
    >
      <p
        style={{
          backgroundColor: `$${props.color}`,
        }}
      >
        {props.text}
      </p>
    </div>
  );
};

export default Tag;
