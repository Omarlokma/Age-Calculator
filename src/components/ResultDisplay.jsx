export default function ResultDisplay({ age }) {
  return (
    <div className="output">
      <p>
        <span className="value">{age?.years ?? '--'}</span>
        <span className="label">years</span>
      </p>
      <p>
        <span className="value">{age?.months ?? '--'}</span>
        <span className="label">months</span>
      </p>
      <p>
        <span className="value">{age?.days ?? '--'}</span>
        <span className="label">days</span>
      </p>
    </div>
  );
}
