import React from "react";

function ServerButton(): JSX.Element {
  // Error Client Component props
  // const click = () => {
  //   console.log("server rendering");
  // };
  console.log("server rendering");
  return <button>server</button>;
}

export default ServerButton;
