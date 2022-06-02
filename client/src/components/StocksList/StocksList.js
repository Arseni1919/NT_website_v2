import {useState, useEffect} from "react";
import StockButton from "./StockButton";


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
        {data &&
          data.map((title) => (
            <StockButton title={title} />
          ))}

    </div>
    );
}

export default StocksList;