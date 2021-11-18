// function Stock({title, link}) {
//     return (
//         <div className="stock-container">
//           <a href={link} target="_blank"><h2>{ title }</h2></a> 
//         </div>
//     )
// }

import News from './News';

function Stock({quotes, news}) {
  let name = quotes[0].shortname;
  let ticker = quotes[0].symbol;
  let exchange = quotes[0].exchange;
    return (
        <div className="stock-container">
         <h2>{ name }</h2>
         <p>{ exchange }: ${ ticker }</p>
         {
           news.slice(0,3).map((item) => {
             return <News key={item.uuid} pub={item.publisher} story={item.title} link={item.link} />
           })
         }
        </div>
    )
}

export default Stock
