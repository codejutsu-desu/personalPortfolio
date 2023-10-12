import * as React from "react";
const SvgComponent = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={1920} height={1080} {...props}>
    <path
      d="M0 1080V894.99s689.446 178.187 917.271 42.017c227.826-136.17 117.125-316.329 266.214-392.485C1327.415 471 1533.02 566.117 1920 440.308V1080"
      style={{
        fill: "#55bdca",
        fillOpacity: 1,
        stroke: "#000",
        strokeWidth: 0,
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeMiterlimit: 4,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
  </svg>
);
export default SvgComponent;
