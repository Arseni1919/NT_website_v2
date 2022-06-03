import DecisionTab from "./DecisionTab";
import {isSameString} from "../../functions";

export default function StrategyItem({title, chosenStrategy, setChosenStrategy}) {
    const toBuy = Math.random() > 0.5

    const onClick = (e) => {
        if (isSameString(chosenStrategy, title)) {
            setChosenStrategy('')
        } else {
            setChosenStrategy(title)
        }
    }

  return (
    <div className={`StrategyItem  ${isSameString(chosenStrategy, title) ? 'selectedItem' : 'noSelectedItem'} pointer hoverOver`}
    onClick={onClick}>
        <p>{title}</p>
        <DecisionTab title={toBuy ? 'sell': 'buy'} />

    </div>
  );
}