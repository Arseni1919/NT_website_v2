import SignalGraph from "./SignalGraph";

function SignalsGraphs({chosenSignals}) {
  return (
    <div className="SignalsGraphs container">
        <h3>SignalsGraphs</h3>
        {chosenSignals &&
        chosenSignals.map((item) => (<SignalGraph name={item} key={item}/>))}
        {/*<SignalGraph name={'item'}/>*/}
    </div>
  );
}

export default SignalsGraphs;