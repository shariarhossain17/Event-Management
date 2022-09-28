import React from "react";
import { useSelector } from "react-redux";

import "../Event/Event.css";

const Event = () => {
  const event = useSelector((state) => state.counter);
  console.log(event);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

export default Event;
