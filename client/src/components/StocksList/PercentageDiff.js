import { AiFillCaretUp, AiFillCaretDown } from "react-icons/ai";

export default function PercentageDiff({percentageFromPrevClose}) {
  return (
    <span className="PercentageDiff">
        <a className={'percentage'} href="#">{percentageFromPrevClose.toFixed(2)}%</a>
        <span className="arrow">
            { percentageFromPrevClose > 0 ?
                <AiFillCaretUp style={{color: 'Aquamarine', cursor: 'pointer'}}/> :
                <AiFillCaretDown style={{color: 'Crimson', cursor: 'pointer'}}/>
            }
        </span>

    </span>
  );
}