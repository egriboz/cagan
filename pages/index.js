import React from "react";
import Link from "next/link";
import Bird from "./birds";
import { IconMoodBoy } from "@tabler/icons";

const Index = () => {
  return (
    <>
      <div className="main">
        <div className="logo">
          <IconMoodBoy />
          <span>DRAGON MAVİŞ</span>
        </div>
        <Bird />
        {/* <Link href="/birds">
        <a>Birds Example</a>
      </Link>
      <Link href="/boxes">
        <a>Boxes Example</a>
      </Link> */}
      </div>
      <style jsx global>{``}</style>
    </>
  );
};

export default Index;
