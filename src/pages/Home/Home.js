import React from "react";
import bannerImg from "../../assests/bannerimg.png";
import "../Home/Home.css";

const Home = () => {
  return (
    <section className="banner-section">
      <div className="banner">
        <div className="banner-left">
          <div>
            <img className="banner-img" src={bannerImg} alt="bannerImg" />
          </div>

          <div className="btn-create">
            <button className="create-btn event-btn">🎉 Create my event</button>
          </div>
        </div>
        <div className="banner-text">
          <div className="text">
            <h1 className="text-1">Imagine if</h1>
            <h1 className="text-2">Snapchat</h1>
            <h1 className="text-3">had events.</h1>
            <p className="paragraph-text">
              Easily host and share events with your friends across any social
              media.
            </p>
          </div>
          <div className="btn-section">
            <button className="event-btn">🎉 Create my event</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
