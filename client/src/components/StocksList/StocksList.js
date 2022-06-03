import StockButton from "./StockButton";
import useFetch from "react-fetch-hook";
import { path } from "../../load_env_variables";

function StocksList() {
    // const [data, setData] = useState(null);
    const { isLoading, data } = useFetch(`${path}/get_stocks_names`);
    // console.log(data)
    return (
    <div className="StocksList container">
        <h3>StocksList</h3>
        {isLoading ? (<div>Loading...</div>) : (<></>)}
        {data &&
          data.map((title) => (
            <StockButton title={title} key={title}/>
          ))}

    </div>
    );
}

export default StocksList;