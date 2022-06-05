import StockButton from "./StockButton";
import useFetch from "react-fetch-hook";
import { path } from "../../load_env_variables";
// import {useState} from "react";

function StocksList({mainGraphStock, setMainGraphStock}) {
    const { isLoading, data } = useFetch(`${path}/get_stocks_names`);

    return (
    <div className="StocksList container">
        <h3>StocksList</h3>
        {isLoading ? (<div>Loading...</div>) : (<></>)}
        {data &&
          data.map((title) => (
            <StockButton title={title}
                         key={title}
                         mainGraphStock={mainGraphStock}
                         setMainGraphStock={setMainGraphStock}
            />
          ))}

    </div>
    );
}

export default StocksList;