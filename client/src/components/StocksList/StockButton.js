import PercentageDiff from "./PercentageDiff";
import {useState} from "react";

function StockButton({title}) {
    const [percentageFromPrevClose, setPercentageFromPrevClose] = useState(Math.random() - 0.5)

  return (
    <div className="StockButton">
        <a href="#">{title}</a>
        <PercentageDiff percentageFromPrevClose={percentageFromPrevClose}/>
    </div>
  );
}

export default StockButton;