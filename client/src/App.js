import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import StocksList from "./components/StocksList/StocksList";
import StrategiesList from "./components/StrategiesList/StrategiesList";
import SignalsList from "./components/SignalsList/SignalsList";
import MainGraph from "./components/MainGraph/MainGraph";
import SignalsGraphs from "./components/SignalsGraphs/SignalsGraphs";
import {useState} from "react";

function App() {
    const [mainGraphStock, setMainGraphStock] = useState('SPY');
    const [chosenStrategy, setChosenStrategy] = useState('');
    const [chosenSignals, setChosenSignals] = useState(['RSI']);

    return (
    <div className="App">
      <Header />
        <div className="layout">
            <StrategiesList chosenStrategy={chosenStrategy} setChosenStrategy={setChosenStrategy}/>
            <MainGraph mainGraphStock={mainGraphStock} chosenStrategy={chosenStrategy}/>
            <StocksList setMainGraphStock={setMainGraphStock} mainGraphStock={mainGraphStock}/>
            <SignalsList chosenSignals={chosenSignals} setChosenSignals={setChosenSignals}/>
            <SignalsGraphs chosenSignals={chosenSignals} mainGraphStock={mainGraphStock}/>
        </div>
      <Footer />
    </div>
    );
}

export default App;
