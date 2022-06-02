import DecisionTab from "../StocksList/DecisionTab";

export default function StrategyItem({title}) {
    const toBuy = Math.random() > 0.5
  return (
    <div className="StrategyItem">
        <p>{title}</p>
        <DecisionTab title={toBuy ? 'sell': 'buy'} />

    </div>
  );
}