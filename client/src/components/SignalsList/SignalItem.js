
export default function SignalItem({title}) {

  return (
    <div className="SignalItem innerItem">
        <input type="checkbox" id={`${title}`} name={`${title}`} value='unchecked' />
        <span className={'signal_label'}>{title}</span>
    </div>
  );
}
