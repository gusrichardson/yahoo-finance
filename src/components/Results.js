import Stock from './Stock';

function Results({ stocks }) {
    return (
        <div id="results">
            <h3>Results</h3>
            {
                stocks.map(stock => {
                     return <Stock key={stock.quotes[0].score} quotes={stock.quotes} news={stock.news} />
                })
            }
        </div>
    )
}

export default Results
