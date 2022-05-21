import React from "react";

function App() {
  return <Program {...programData} />;
}

export default App;

function Program(props) {
  const {
    place,
    roadmap,
    faq,
    iconTwitter,
    joinOurDiscord,
    spanText1,
    spanText2,
    title,
    aCommunityOfWeb3,
    howItWorks,
    pickYourLevelOfE,
    hackToEarn,
    openGovernance,
    learnCybersecurity,
    collectMoreNftTok,
    workThroughTheSer,
    image1,
    image2,
    image3,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="programscreen">
        <div className="flex-rowraleway-normal-black-30px">
          <div className="place">
            {place}
          </div>
          <div className="roadmap">
            {roadmap}
          </div>
          <div className="faq">
            {faq}
          </div>
          <img className="twitter" src={iconTwitter} />
          <div className="overlap-group">
            <div className="join-our-discord">
              {joinOurDiscord}
            </div>
          </div>
        </div>
        <div className="welcome-topressstart2p-normal-black-30px">
          <span className="span0pressstart2p-normal-black-30px">{spanText1}</span>
          <span className="span1">{spanText2}</span>
        </div>
        <h1 className="title">
          {title}
        </h1>
        <div className="a-community-of-web3raleway-normal-black-30px">
          {aCommunityOfWeb3}
        </div>
        <div className="how-it-works">
          {howItWorks}
        </div>
        <div className="overlap-group2">
          <div className="how-it-works-section">
            <div className="group-container">
              <div className="group-6border-5px-black"></div>
              <div className="overlap-group1">
                <div className="group-7border-5px-black"></div>
                <div className="pick-your-level-of-eralewaydots-normal-black-30px">
                  {pickYourLevelOfE}
                </div>
              </div>
            </div>
            <div className="group-8border-5px-black"></div>
          </div>
          <div className="hack-to-earnraleway-bold-black-40px">
            {hackToEarn}
          </div>
          <div className="open-governance">
            {openGovernance}
          </div>
          <div className="learn-cybersecurityraleway-bold-black-40px">
            {learnCybersecurity}
          </div>
          <div className="collect-more-nft-tokralewaydots-normal-black-30px">
            {collectMoreNftTok}
          </div>
          <div className="work-through-the-serralewaydots-normal-black-30px">
            {workThroughTheSer}
          </div>
          <img className="image" src={image1} />
          <img className="image-1" src={image2} />
          <img className="image-2" src={image3} />
        </div>
      </div>
    </div>
  );
}

const programData = {
  place: "Home",
  roadmap: "Roadmap",
  faq: "FAQ",
  iconTwitter: "twitter.png",
  joinOurDiscord: "JOIN OUR  DISCORD",
  spanText1: (
    <React.Fragment>
      <br />
    </React.Fragment>
  ),
  spanText2: "WELCOME TO",
  title: "RESISTANC3",
  aCommunityOfWeb3: "A community of web3 hackers learning cybersecurity",
  howItWorks: "How it works",
  pickYourLevelOfE: (
    <React.Fragment>
      Pick your level of experience
      <br />
      Decrypt NFT <br />
      Earn a NFT badge, tokens, and more
    </React.Fragment>
  ),
  hackToEarn: "Hack-To-Earn",
  openGovernance: "Open Governance",
  learnCybersecurity: "Learn cybersecurity",
  collectMoreNftTok: (
    <React.Fragment>
      Collect more NFT tokens to gain recognition and vote on the next challenge proposal. <br />
      <br />
      The more challenges you complete, the higher you rank on the leaderboard.
    </React.Fragment>
  ),
  workThroughTheSer: "Work through the series of challenges that will help you gain analytical skills in cybersecurity.",
  image1: "image.png",
  image2: "image.png",
  image3: "image.png",
};