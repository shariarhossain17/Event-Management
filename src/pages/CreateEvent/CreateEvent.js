import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ".././CreateEvent/CreateEvent.css";
import { createEvent } from "./CreateSlice";
const CreateEvent = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate()
  const onSubmit = (data) => {
    dispatch(createEvent(data));
    navigate('/event')
  };
  return (
    <section className="create-section">
      <div className="create">
        <h1 className="text-event">Create Event</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("event", { required: true })}
            placeholder="Enter event name"
          />{" "}
          <br />
          {errors.event && (
            <span className="error">event name required</span>
          )}{" "}
          <br />
          <input
            {...register("host", { required: true })}
            placeholder="Enter host name"
          />{" "}
          <br />
          {errors.host && (
            <span className="error">host name required</span>
          )}{" "}
          <br />
          <input
            {...register("start", { required: true })}
            placeholder="Enter start date"
          />{" "}
          <br />
          {errors.start && (
            <span className="error">Start date required</span>
          )}{" "}
          <br />
          <input
            {...register("end", { required: true })}
            placeholder="Enter end date"
          />{" "}
          <br />
          {errors.end && <span className="error">end date required</span>}{" "}
          <br />
          <input
            {...register("location", { required: true })}
            placeholder="Enter location"
          />{" "}
          <br />
          {errors.location && (
            <span className="error">location required</span>
          )}{" "}
          <br />
          <button className="next-btn">Next</button>
        </form>
      </div>
    </section>
  );
};

export default CreateEvent;
