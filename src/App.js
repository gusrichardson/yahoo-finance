import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import WatchList from "./components/WatchList";
import Results from "./components/Results";

function App() {
  let [stock, setStock] = useState([]);
  let [ticker, setTicker] = useState("");
  let [region, setRegion] = useState("");
  let [watchList, setWatchList] = useState([]);

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
        let stocksArr = [res.data];
        setStock(stocksArr);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleRemove = (score) => {
    let wl = watchList;
    let newWatchList = wl.filter((item) => item.quotes[0].score !== score);
    setWatchList(newWatchList);
  };

  const addToWatchList = (stock) => {
    if (
      watchList.some((item) => item.quotes[0].score === stock.quotes[0].score)
    ) {
      alert("You're already watching this!");
    } else {
      setWatchList([...watchList, stock]);
    }
  };

  const showMore = (item) => {
    console.log(item);
  };

  return (
    <div className="App">
      <Header title="Yahoo Finance App" />
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <SearchForm
              handleInput={handleInput}
              handleRegion={handleRegion}
              handleSubmit={handleSubmit}
            />
          </div>
          <div className="col-sm">
            <WatchList
              watchList={watchList}
              handleRemove={handleRemove}
              showMore={showMore}
            />
          </div>
        </div>
      </div>
      {stock.length > 0 ? (
        <Results stocks={stock} addToWatchList={addToWatchList} />
      ) : (
        <p>Enter a stock and a region in the form above</p>
      )}
    </div>
  );
}

export default App;
