import React from "react";
import "./css/pillheader.css";

export default function PillHeader(props) {
  let style = "pillHeader";
  if (props.secondaryStyle === true) {
    style += " secondaryStyle";
  }

  return <div className={style}>{props.value}</div>;
}
