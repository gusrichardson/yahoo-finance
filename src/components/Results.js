import Stock from "./Stock";

function Results({ stocks, addToWatchList }) {
  return (
    <div id="results">
      <h3>Results</h3>
      {stocks.map((stock) => {
        return (
          <Stock
            key={stock.quotes[0].score}
            stock={stock}
            // quotes={stock.quotes}
            // news={stock.news}
            addToWatchList={addToWatchList}
          />
        );
      })}
    </div>
  );
}

export default Results;
