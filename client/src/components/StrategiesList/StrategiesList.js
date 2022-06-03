import {useEffect, useState} from "react";
import StrategyItem from "./StrategyItem";
import useFetch from "react-fetch-hook";
import { path } from "../../load_env_variables";

function StrategiesList({chosenStrategy, setChosenStrategy}) {
    // const [data, setData] = useState(null);
    const { isLoading, data } = useFetch(`${path}/get_strategies_names`);


    return (
    <div className="StrategiesList container">
      <h3>StrategiesList</h3>
        {isLoading ? (<div>Loading...</div>) : (<></>)}
        {data &&
          data.map((title) => (
            <StrategyItem title={title}
                          key={title}
                          chosenStrategy={chosenStrategy}
                          setChosenStrategy={setChosenStrategy}
            />
          ))}
    </div>
    );
}

export default StrategiesList;