import React, { useState } from "react";
import "./App.css";
import bmiimage from "../public/bmiimage.jpg";
const App = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [status, setStatus] = useState("");
  const [errormsg, setErrormsg] = useState("");

  const calcu = () => {
    const isValidHeight = /^\d+$/.test(height);
    const isValidWeight = /^\d+$/.test(weight);
    if (isValidHeight && isValidWeight) {
      const heightInMeter = height / 100;
      const bmiValue = weight / (heightInMeter * heightInMeter);
      setBmi(bmiValue.toFixed(2));
      // console.log("giiii");
      if (bmiValue < 18.5) {
        setStatus("Under weight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setStatus("Normal Weight");
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setStatus("Over weight");
      } else {
        setStatus("Obisity");
      }
      setErrormsg("");
    } else {
      setBmi(null);
      setStatus("");
      setErrormsg("Enter Valid Inputs");
    }
  };
  const clearall = () => {
    setHeight("");
    setWeight("");
    setBmi("");
    setStatus("");
  };
  return (
    <div className="container">
      <div className="pic">
        <img src={bmiimage} alt="logo" className="logo" />
      </div>
      <div className="height">
        {errormsg && <p className="err">{errormsg}</p>}
        <div className="data">
          <h1>BMI Calculator</h1>
          <label htmlFor="heigth">Enter Your Height(cm)</label>
          <input
            type="text"
            className="inputbox"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div className="weight">
          <label htmlFor="weight">Enter Your Weight(kg)</label>
          <input
            type="text"
            className="inputbox"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <button className="btn calc" onClick={calcu}>
          Calculate
        </button>
        <button className="btn clear" onClick={clearall}>
          Clear
        </button>
        <div className="p">
          <span value={bmi}>
            Your BMI is <b>{bmi}</b>
          </span>
          <span value={status}>
            Status <b>{status}</b>
          </span>
        </div>
      </div>
      <div className="footer">
        Designed by <span>Gayathri</span>
      </div>
    </div>
  );
};

export default App;
