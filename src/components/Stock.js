import { Button } from "react-bootstrap";
import News from "./News";

function Stock({ stock, addToWatchList }) {
  const name = stock.quotes[0].shortname;
  const ticker = stock.quotes[0].symbol;
  const exchange = stock.quotes[0].exchange;
  const news = stock.news;
  return (
    <div id="stock-container" className="mt-2 p-4">
      <h3>{name}</h3>
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
