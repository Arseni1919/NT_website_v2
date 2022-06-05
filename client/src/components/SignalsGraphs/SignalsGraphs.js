import SignalGraph from "./SignalGraph";

function SignalsGraphs({chosenSignals, mainGraphStock}) {
  return (
    <div className="SignalsGraphs container">
        <h3>SignalsGraphs</h3>
        {chosenSignals &&
        chosenSignals.map((signalName) => (<SignalGraph signalName={signalName} key={signalName} mainGraphStock={mainGraphStock}/>))}
        {/*<SignalGraph name={'item'}/>*/}
    </div>
  );
}

export default SignalsGraphs;