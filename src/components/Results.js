import Stock from "./Stock";

function Results({ stocks, addToWatchList }) {
  return (
    <div id="results" className="container mt-4">
      <h2>Results!</h2>
      {stocks.map((stock) => {
        return (
          <Stock
            key={stock.quotes[0].score}
            stock={stock}
            addToWatchList={addToWatchList}
          />
        );
      })}
    </div>
  );
}

export default Results;
