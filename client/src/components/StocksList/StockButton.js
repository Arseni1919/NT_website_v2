import PercentageDiff from "./PercentageDiff";
import {useState} from "react";
import {isSameString} from "../../functions";

function StockButton({title, mainGraphStock, setMainGraphStock}) {
    const [percentageFromPrevClose, setPercentageFromPrevClose] = useState(Math.random() - 0.5)

    const onClick = (e) => {
        setMainGraphStock(title)
    }

    // const isSelected = () => {
    //     return selectedStock.localeCompare(title) === 0
    // }
    return (
    <div className={`StockButton ${isSameString(mainGraphStock, title) ? 'selectedItem' : 'noSelectedItem'} pointer`} onClick={onClick}>
        <span className={`stockNameTitle`}>{title}</span>
        <PercentageDiff percentageFromPrevClose={percentageFromPrevClose}/>
    </div>
    );
}

export default StockButton;