import { Button } from "react-bootstrap";
import News from "./News";

function Stock({ stock, addToWatchList }) {
  const name = stock.quotes[0].shortname;
  const ticker = stock.quotes[0].symbol;
  const exchange = stock.quotes[0].exchange;
  const news = stock.news;
  // let name = quotes[0].shortname;
  // let ticker = quotes[0].symbol;
  // let exchange = quotes[0].exchange;
  return (
    <div className="stock-container">
      <h2>{name}</h2>
      <p>
        {exchange}: ${ticker}
      </p>
      {news.slice(0, 3).map((item) => {
        return (
          <News
            key={item.uuid}
            pub={item.publisher}
            story={item.title}
            link={item.link}
          />
        );
      })}
      {/* <Button type="button" onClick={() => addToWatchList(quotes[0])}> */}
      <Button type="button" onClick={() => addToWatchList(stock)}>
        Add to watch list
      </Button>
    </div>
  );
}

export default Stock;
