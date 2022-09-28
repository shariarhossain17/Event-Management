import React from "react";
import { useNavigate } from "react-router-dom";
import bannerImg from "../../assests/bannerimg.png";
import "../Home/Home.css";

const Home = () => {
    const navigate = useNavigate()
  return (
    <section className="banner-section">
      <div className="banner">
        <div className="banner-left">
          <div className="banner-img1">
            <img className="banner-img" src={bannerImg} alt="bannerImg" />
          </div>

          <div className="btn-create">
            <button onClick={() => navigate('/create')}  className="create-btn event-btn">🎉 Create my event</button>
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
            <button onClick={() => navigate('/create')} className="event-btn">🎉 Create my event</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
