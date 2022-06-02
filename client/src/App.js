import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import StocksList from "./components/StocksList/StocksList";
import StrategiesList from "./components/StrategiesList/StrategiesList";
import SignalsList from "./components/SignalsList/SignalsList";
import MainGraph from "./components/StocksGraphs/MainGraph";
import SignalsGraphs from "./components/SignalsGraphs";

function App() {
  return (
    <div className="App">
      <Header />
        <div className="layout">
            <StrategiesList />
            <MainGraph />
            <StocksList />
            <SignalsList />
            <SignalsGraphs />
        </div>
      <Footer />
    </div>
  );
}

export default App;
