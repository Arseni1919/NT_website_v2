import StockButton from "./StockButton";
import useFetch from "react-fetch-hook";


function StocksList() {
    // const [data, setData] = useState(null);
    const { isLoading, data } = useFetch("http://localhost:5000/get_stocks_names");

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