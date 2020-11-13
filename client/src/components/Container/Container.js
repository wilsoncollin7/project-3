import React from "react";
// style
import "./Container.css"

function Container(props) {
  return <div className={props.className || "container"} {...props} />;
}

export default Container;
