import React, { useEffect, useState } from "react";
import "./index.css";
const Qoutes = () => {
  const [qoute, setQoute] = useState("Click to generate data");
  const [count, setCount] = useState(0);
  async function changes() {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
    setQoute(data.content);
    console.log(data.content);
    setCount((count) => count + 1);
  }
  // useEffect(function () {
  //   changes();
  // }, []);
  const County = (props) => {
    return (
      <div>
        <p className="county">
          You have seen <b>{props.count}</b> Qoutes
        </p>
      </div>
    );
  };
  return (
    <div className="container">
      {qoute && <p className="p">{qoute}</p>}
      <button className="btn" onClick={changes}>
        Get Qoutes
      </button>
      <County count={count} />
      <footer className="footer">@designed by Gayathri</footer>
    </div>
  );
};

export default Qoutes;
