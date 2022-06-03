import {useState} from "react";
import {isSameString} from "../../functions";

export default function SignalItem({title, allSignalsNames, chosenSignals, setChosenSignals}) {
    const [checkedStatus, setCheckedStatus] = useState(false)
    // chosenSignals.includes(title)
    const onClick = () => {
        const newStatus = !checkedStatus
        let newChosenSignals = []
        if (newStatus) {
            chosenSignals.push(title);
            newChosenSignals = chosenSignals.filter((item) => item)
        } else {
            newChosenSignals = chosenSignals.filter((item) => !isSameString(item, title))
        }
        setCheckedStatus(newStatus)
        setChosenSignals(allSignalsNames.filter((item) => newChosenSignals.includes(item)))
        // console.log(checkedStatus)
    }

    return (
    <div className="SignalItem innerItem pointer alignVerticalCenter" onClick={onClick}>
        <span className="signalItemCheckbox">
            <i className={`check ${checkedStatus ? 'active' : ''}`}>&nbsp;</i>
        </span>
        <span className={'signalLabel'}>{title}</span>
    </div>
    );
}
