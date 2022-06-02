import {useEffect, useState} from "react";
import StrategyItem from "./StrategyItem";

function StrategiesList() {
    const [data, setData] = useState(null);
     useEffect(() => {
      fetch('http://localhost:5000/get_strategies_names')
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
    <div className="StrategiesList container">
      <h3>StrategiesList</h3>
        {data &&
          data.map((title) => (
            <StrategyItem title={title}/>
          ))}
    </div>
    );
}

export default StrategiesList;