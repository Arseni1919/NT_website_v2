import useFetch from "react-fetch-hook";
import SignalItem from "./SignalItem";
import { path } from "../../load_env_variables";

function SignalsList({chosenSignals, setChosenSignals}) {
    const { isLoading, data } = useFetch(`${path}/get_signals_names`);

    return (
    <div className="SignalsList container">
      <h3>SignalsList</h3>
        {isLoading ? (<div>Loading...</div>) : (<></>)}
        {data && data.map((title) => (
                <SignalItem
                        title={title}
                        key={title}
                        allSignalsNames={data}
                        chosenSignals={chosenSignals}
                        setChosenSignals={setChosenSignals}
                />
        ))}
    </div>
    );
}

export default SignalsList;