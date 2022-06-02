import {useEffect, useState} from "react";
import StrategyItem from "./StrategyItem";
import useFetch from "react-fetch-hook";

function StrategiesList() {
    // const [data, setData] = useState(null);
    const { isLoading, data } = useFetch("http://localhost:5000/get_strategies_names");

    return (
    <div className="StrategiesList container">
      <h3>StrategiesList</h3>
        {isLoading ? (<div>Loading...</div>) : (<></>)}
        {data &&
          data.map((title) => (
            <StrategyItem title={title} key={title}/>
          ))}
    </div>
    );
}

export default StrategiesList;