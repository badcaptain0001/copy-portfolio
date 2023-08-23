import React from "react";
import { useState } from "react";
import Header from "../components/Header";

function Digitalcampaigns() {
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Header
        handleWorkScroll={handleWorkScroll}
        handleAboutScroll={handleAboutScroll}
      />
      <h1 className="tablet:m-10 text-8xl text-bold">Digital Campaigns</h1>
      <h4 className="tablet:m-10 text-2xl text-bold">Fortune Oils and Foods: Digital Campaign for Mother&apos;s Day</h4>
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <object
          type="application/pdf"
          data="https://usc1.contabostorage.com/f49065475849480fbcd19fb8279b2f98:personal/CAP1.pdf"
          width="100%"
          height="800"
        ></object>
      </div>
    </>
  );
}

export default Digitalcampaigns;
