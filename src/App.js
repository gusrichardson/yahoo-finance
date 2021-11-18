import React, { useState, useEffect } from 'react'
// import React, { useEffect } from 'react'
import axios  from 'axios';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Results from './components/Results'

function App() {

  let [stock, setStock] = useState([]);
  let [ticker, setTicker] = useState("");
  let [region, setRegion] = useState("");

   const options = {
    method: "GET",
    url: "https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete",
    params: {
      q: ticker,
      region: region
    },
    headers: {
      "x-rapidapi-key": "ade8220407msh0441b9e7214b5dfp1ec580jsnd9c4e9d4905a",
      'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    }
  };

  // useEffect(() => {
  //   axios.request(options).then((res) => {
  //     console.log(res.data);
  //     setStocks(res.data.news);
  //   }).catch((err) => {
  //     console.error(err);
  //   });
  // }, [])

  const handleInput = (input) => {
    setTicker(input);
    console.log(ticker);
  }

    const handleRegion = (input) => {
    setRegion(input);
    console.log(region);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
      axios.request(options).then((res) => {
      console.log(res.data);
      let stocksArr = [...stock, res.data];
      // setStock(res.data);
      setStock(stocksArr);
    }).catch((err) => {
      console.error(err);
    });
  }


  return (
    <div className="App">
     <Header title="Yahoo Finance App" />
     <Form handleInput={handleInput} handleRegion={handleRegion} handleSubmit={handleSubmit}/>
     {/* {
       stock.quotes ? <Stock quotes={stock.quotes} news={stock.news} /> : <p>Enter a stock and a region in the form above</p> 
     } */}

      {
        stock.length > 0 ? <Results stocks={stock} /> : <p>Enter a stock and a region in the form above</p>
      }

      {/* {
        stocks.map(stock => {
          return <Stock
                    key={stock.uuid}
                    title={stock.title}
                    link={stock.link}
                       />
        })
      } */}
    </div>
  );
}

export default App;
