import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import img from "../../assests/Birthday cake.png";
import "../Event/Event.css";

const Event = () => {
  const event = useSelector((state) => state.counter);
  return (
    <section className="event-section">
      <div className="event">
        <div className="event-left">
          <h1 className="text-event">{event.event}</h1>
          <p>
            {" "}
            <span>
              {" "}
              <h4 className="host">Hosted by {event.host}</h4>
            </span>
          </p>
          <div className="date">
            <div className="icon-bg">
              <AiOutlineCalendar className="calender-icon" />
            </div>
            <div>
              <p className="start text-color">
                {event.start} to {event.end}
              </p>
            </div>
          </div>
          <div className="date">
            <div className="icon-bg">
              <IoLocationOutline className="calender-icon" />
            </div>
            <div>
              <p className="start text-color">
                {event.location}
              </p>
            </div>
          </div>
        </div>
        <div>
          <img className="event-img" src={img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Event;
