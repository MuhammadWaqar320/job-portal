import React from "react";
import "./countUp.css";
import CountUp from "react-countup";
const CdCounter = () => {
  return (
    <div
      style={{
        background: "#ebf1fa",
        borderBottom: "1px solid rgb(230, 226, 226)",
      }}
    >
      <div
        style={{
          textAlign: "center",
          fontFamily: "initial",
          fontSize: "34px",
          padding: "40px 0px 0px 0px",
        }}
      >
        Total Registrations
      </div>
      <div
        className="row"
        style={{
          textAlign: "center",
          justifyContent: "center",
          padding: "30px 0px 60px 0px",
        }}
      >
        <div
          style={{
            border: "1px solid gray",
            backgroundColor: "#0162a2",
            color: "white",
            marginRight: "10px",
            height: "130px",
            width: "130px",
            alignItems: "center",
            borderRadius: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: "25px" }}>
            <span style={{ fontWeight: "bold" }}>+</span>
            <CountUp end={500} duration={130}></CountUp>
          </span>
          <span>Jobs</span>
        </div>
        <div
          style={{
            border: "1px solid gray",
            backgroundColor: "#0162a2",
            color: "white",
            marginRight: "10px",
            height: "130px",
            width: "130px",
            alignItems: "center",
            borderRadius: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: "25px" }}>
            <span style={{ fontWeight: "bold" }}>+</span>
            <CountUp end={500} duration={130}></CountUp>
          </span>
          <span>Users</span>
        </div>
        <div
          style={{
            border: "1px solid gray",
            backgroundColor: "#0162a2",
            color: "white",
            marginRight: "10px",
            height: "130px",
            width: "130px",
            alignItems: "center",
            borderRadius: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <span style={{ fontSize: "25px" }}>
            <span style={{ fontWeight: "bold" }}>+</span>
            <CountUp end={500} duration={130}></CountUp>
          </span>
          <span>Applications</span>
        </div>
        <div
          style={{
            border: "1px solid gray",
            backgroundColor: "#0162a2",
            color: "white",
            height: "130px",
            width: "130px",
            borderRadius: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span style={{ fontSize: "25px" }}>
            <span style={{ fontWeight: "bold" }}>+</span>
            <CountUp end={500} duration={130}></CountUp>
          </span>
          <span>Companies</span>
        </div>
      </div>
    </div>
  );
};
export default CdCounter;
