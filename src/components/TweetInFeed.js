import React,{useState,useEffect} from "react";
import './TweetInFeed.css';
import { defaultImgs } from '../defaultimgs';
import { Icon } from "web3uikit";
import { abi,contractAddress,provider } from "../contract/interaction";
const { ethers } = require("ethers");
const TweetInFeed = () => {
 
  const [allTwt,setAllTwt] = useState([])


  const contractInteraction = async () => {
    const contract = new ethers.Contract(contractAddress, abi, provider);
    const owner = await contract.owner();
    

    const allTweets = await contract.queryFilter("tweetCreated");
    setAllTwt(allTweets);
    //console.log(allTwt[0].args.tweeter);

  };
  

  useEffect(() => {
    contractInteraction();
    
})

  return (
    <>
      
      {allTwt.map((items, index) => {
       // console.log('Items : ',items.args.tweetImg)
        return (
          <div className="feedTweet" key={index}>

        <img src={defaultImgs[0]} className="profilePic" />
        <div className="completeTweet">
          <div className="who">_name_
                <div className="accWhen">{items.args.tweeter}</div>
          </div>
          <div className="tweetContent">
              {items.args.tweetText}
             
          </div>
          <div className="interactions">
            <div className="interactionNums">
              <Icon fill="#3f3f3f" size={20} svg="messageCircle"/>
            </div>
            <div className="interactionNums">
              <Icon fill="#3f3f3f" size={20} svg="star"/> 12
            </div>
            <div className="interactionNums">
              <Icon fill="#3f3f3f" size={20} svg="matic"/>
            </div>
          </div>
        </div>
      </div>
        )
      })}
      


     
    </>
  );
};

export default TweetInFeed;

