import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import Results from "./components/Results";

function App() {
  let [stock, setStock] = useState([]);
  let [ticker, setTicker] = useState("");
  let [region, setRegion] = useState("");

  const options = {
    method: "GET",
    url: "https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete",
    params: {
      q: ticker,
      region: region,
    },
    headers: {
      "x-rapidapi-key": "ade8220407msh0441b9e7214b5dfp1ec580jsnd9c4e9d4905a",
      "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
    },
  };

  const handleInput = (input) => {
    setTicker(input);
    console.log(ticker);
  };

  const handleRegion = (input) => {
    setRegion(input);
    console.log(region);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("OPTIONS", options);
    axios
      .request(options)
      .then((res) => {
        console.log(res.data);
        let stocksArr = [...stock, res.data];
        setStock(stocksArr);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="App">
      <Header title="Yahoo Finance App" />
      <SearchForm
        handleInput={handleInput}
        handleRegion={handleRegion}
        handleSubmit={handleSubmit}
      />
      {stock.length > 0 ? (
        <Results stocks={stock} />
      ) : (
        <p>Enter a stock and a region in the form above</p>
      )}
    </div>
  );
}

export default App;
