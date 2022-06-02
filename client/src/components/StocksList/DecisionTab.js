
export default function DecisionTab({title}) {
  return (
    <div className={`DecisionTab`}>
      <a href="#" className={`${title}`}>{title}</a>
    </div>
  );
}