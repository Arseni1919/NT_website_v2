import useFetch from "react-fetch-hook";
import SignalItem from "./SignalItem";
import { path } from "../../load_env_variables";

function SignalsList() {
    const { isLoading, data } = useFetch(`${path}/get_signals_names`);
    // console.log(path)
    return (
    <div className="SignalsList container">
      <h3>SignalsList</h3>
        {isLoading ? (<div>Loading...</div>) : (<></>)}
        {data && data.map((title) => (<SignalItem title={title} key={title}/>))}
    </div>
    );
}

export default SignalsList;