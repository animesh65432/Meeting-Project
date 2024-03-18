import React from "react";
import classes from "./MeetupDetails.module.css";

const MeetupDetails = (props) => {
  return (
    <>
      <div className={classes.detail}>
        <img src={props.image}></img>
        <h1>{props.title}</h1>
        <h6>{props.address}</h6>
        <p>{props.description}</p>
      </div>
    </>
  );
};

export default MeetupDetails;
