// SPDX-License-Identifier: MIT

pragma solidity >=0.7.0 <0.9.0;

contract Twitter {
    address public owner;
    uint256 private counter;

    constructor() {
        counter = 0;
        owner = msg.sender;
    }

    struct tweet {
        address tweeter;
        uint256 id;
        string tweetText;
        string tweetImg;
    }

    event tweetCreated (
        address tweeter,
        uint256 id,
        string tweetText,
        string tweetImg
    );

    mapping(uint256 => tweet) Tweets;

    function addTweet(string memory tweetText, string memory tweetImg)
        public
        payable
    {
        require(msg.value == (0.05 ether), "Please submit 1 Goerli");
        tweet storage newTweet = Tweets[counter];
        newTweet.tweetText = tweetText;
        newTweet.tweetImg = tweetImg;
        newTweet.id = counter;
        newTweet.tweeter = msg.sender;

        emit tweetCreated(msg.sender, counter, tweetText, tweetImg);

        counter++;

        payable(owner).transfer(msg.value);
    }

    function getTweet(uint256 id)
        public
        view
        returns (
            string memory,
            string memory,
            address
        )
    {
        require(id < counter, "No such tweets found");
        tweet storage t = Tweets[id];
        return (t.tweetText, t.tweetImg, t.tweeter);
    }
}
