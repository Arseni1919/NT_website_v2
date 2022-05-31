import {useState, useEffect} from "react";


async function fetchStocks(){
    const res = await fetch('http://localhost:5000/get_stocks_names')
        .then((res) => {
            return res.json();
        })
        .catch((e) => console.log(e));
    return res;
}

function StocksList() {
    const [data, setData] = useState(null);
     useEffect(() => {
      fetch('http://localhost:5000/get_stocks_names')
          .then((res) => res.json())
          // .then((response) => console.log(response))
          .then((actualData) => {
            setData(actualData);
          })
          .catch((err) => {
              console.log(err.message);
          });

     }, []);
    return (
    <div className="StocksList container">
        <h3>StocksList</h3>
        <ul>
        {data &&
          data.map((title) => (
            <li key={title}>
              <h3>{title}</h3>
            </li>
          ))}
        </ul>
        <ul>
        {data &&
          data.map((title) => (
            <li key={title}>
              <h3>{title}</h3>
            </li>
          ))}
        </ul>

    </div>
    );
}

export default StocksList;