"use client";
import React from "react";

function ClientButton(): JSX.Element {
  const click = () => {
    console.log("client rendering");
  };
  return <button onClick={click}>client</button>;
}

export default ClientButton;
