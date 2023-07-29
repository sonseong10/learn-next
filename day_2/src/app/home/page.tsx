import React from "react";
import ServerButton from "@/components/server/button";
import dynamic from "next/dynamic";

const ClientButton = dynamic(() => import("@/components/client/buttoon"), {
  ssr: false,
});

function HomePage() {
  return (
    <h1>
      HomePage!
      <div>
        <ClientButton />
        <ServerButton />
      </div>
    </h1>
  );
}

export default HomePage;
