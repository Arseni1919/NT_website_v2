import useFetch from "react-fetch-hook";
import SignalItem from "./SignalItem";


function SignalsList() {
    const { isLoading, data } = useFetch("http://localhost:5000/get_signals_names");

    return (
    <div className="SignalsList container">
      <h3>SignalsList</h3>
        {isLoading ? (<div>Loading...</div>) : (<></>)}
        {data && data.map((title) => (<SignalItem title={title} key={title}/>))}
    </div>
    );
}

export default SignalsList;