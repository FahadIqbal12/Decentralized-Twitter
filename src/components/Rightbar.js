import React from "react";
import './Rightbar.css';

import { Input } from "web3uikit";


const Rightbar = () => {
  const trends = [
    {
      img: 'https://i.ytimg.com/vi/7OR12WF2-3Y/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAalwNgkL7jZv5RBREnENjYQ4ol1A',
      text: "Create Your own Blockchain from Code Eater",
      link: "https://www.youtube.com/watch?v=7OR12WF2-3Y",
    },
    {
      img: 'https://i.ytimg.com/vi/NqGe942J4Y0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAXUVC6mHeTi5VaQr_0umv3qCRjLg',
      text: "Master solidity in 4 hours from Code Eater",
      link: "https://www.youtube.com/watch?v=NqGe942J4Y0&t=11079s",
    },
    {
      img: "https://i.ytimg.com/vi/6aF6p2VUORE/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD_w57r8W17_nn8yS-7j-rfcO7W7A",
      text: "Full Blockchain course from Code Eater",
      link: "https://www.youtube.com/watch?v=6aF6p2VUORE&t=2564s",
    },
   
  ];

  return (
    <>
      <div className="rightbarContent">
        <Input
          label="Search Twitter"
          name="Search Twitter"
          prefixIcon="search"
          labelBgColor="#141d26"
        ></Input>

        <div className="trends">
          News For You
          {trends.map((e) => {
            return (
              <>
                <div className="trend" onClick={()=>{window.open(e.link)}}>
                  <img src={e.img} className="trendImg" />
                  <div className="trendText">{e.text}</div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default Rightbar;

