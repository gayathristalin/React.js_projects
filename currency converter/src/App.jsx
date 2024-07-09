import React, { useEffect, useState } from "react";
import "./App.css";
import currency from "../public/currency.png";
import axios from "axios";
const App = () => {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [ans, setAns] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const coversion = async () => {
      try {
        setLoading(true);
        const url = `https://api.exchangerate-api.com/v4/latest/${from}`;
        const res = await axios.get(url);
        console.log(res);
        const rate = res.data.rates[to];
        setAns(rate.toFixed(2));
      } catch {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    coversion();
  }, [from, to, amount]);
  // const HandleAmount = (e) => {
  //   const value = parseFloat(e.target.value);
  //   setAmount(isN(value) ? 0 : value);
  // };

  return (
    <div className="container">
      <div>
        {" "}
        <img src={currency} alt="" className="img" />{" "}
      </div>

      <h1>Currency Converter</h1>
      {loading && <p>Loading.....</p>}
      {!loading && (
        <div className="data">
          <div className="amount">
            <label htmlFor="amt">Enter the amount</label>
            <input
              type="number"
              name=""
              id=""
              value={amount}
              // onChange={HandleAmount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="select">
            <div className="From">
              <label htmlFor="from">From Currency:</label>
              <select
                id="fromCurrency"
                onChange={(e) => setFrom(e.target.value)}
              >
                <option value="USD">USD - United States Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound Sterling</option>
                <option value="JPY">JPY - Japanese Yen</option>
                <option value="AUD">AUD - Australian Dollar</option>
                <option value="CAD">CAD - Canadian Dollar</option>
                <option value="CNY">CNY - Chinese Yuan</option>
                <option value="INR">INR - Indian Rupee</option>
                <option value="BRL">BRL - Brazilian Real</option>
                <option value="ZAR">ZAR - South African Rand</option>
              </select>
            </div>
            <div className="to">
              <label htmlFor="to">To Currency:</label>
              <select id="toCurrency" onChange={(e) => setTo(e.target.value)}>
                <option value="USD">USD - United States Dollar</option>
                <option value="EUR">EUR - Euro</option>
                <option value="GBP">GBP - British Pound Sterling</option>
                <option value="JPY">JPY - Japanese Yen</option>
                <option value="AUD">AUD - Australian Dollar</option>
                <option value="CAD">CAD - Canadian Dollar</option>
                <option value="CNY">CNY - Chinese Yuan</option>
                <option value="IN">INR - Indian Rupee</option>
                <option value="BRL">BRL - Brazilian Real</option>
                <option value="ZAR">ZAR - South African Rand</option>
              </select>
            </div>{" "}
          </div>
          <div className="result">
            <p>
              {amount} {from} is equal to {ans} {to}
            </p>
          </div>
        </div>
      )}
      <div className="footer">
        <p>
          Designed by <span>Gayathri</span>
        </p>
      </div>
    </div>
  );
};

export default App;
