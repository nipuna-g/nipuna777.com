import React from "react";

const FullWidthContent = props => (
  <div style={props.style}>
    <div style={{ maxWidth: 960, margin: "0 auto", padding: "1em" }}>
      {props.children}
    </div>
  </div>
);

export default FullWidthContent;
