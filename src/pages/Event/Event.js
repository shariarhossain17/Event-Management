import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import { useSelector } from "react-redux";
import img from '../../assests/Birthday cake.png';
import "../Event/Event.css";

const Event = () => {
  const event = useSelector((state) => state.counter);
  return (
   <section className="event-section">
     <div className="event">
      <div>
        <h1>{event.event}</h1>
        <h4>Hosted by {event.host}</h4>
        <div className="date">
            <div>
                <AiOutlineCalendar/>
            </div>
            <div>
                <h6>{event.start}</h6>
                <h6>to {event.end}</h6>
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
