import React from "react";
import Link from "next/link";
import Bird from "./birds";

const Index = () => {
  return (
    <>
      <div className="main">
        <div className="logo">DRAGON MAVİŞ</div>
        <Bird />
        {/* <Link href="/birds">
        <a>Birds Example</a>
      </Link>
      <Link href="/boxes">
        <a>Boxes Example</a>
      </Link> */}
      </div>
      <style jsx global>{`
        .logo {
          padding: 10px;
          color: darkblue;
          font-family: sans-serif;
          font-weight: bold;
        }
      `}</style>
    </>
  );
};

export default Index;
