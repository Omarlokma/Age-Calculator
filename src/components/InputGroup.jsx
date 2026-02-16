export default function InputGroup({ day, month, year, setDay, setMonth, setYear, onSubmit }) {
  return (
    <div className="inputs">
      <div>
        <label>DAY</label>
        <input
          type="text"
          placeholder="DD"
          maxLength="2"
          value={day}
          onChange={e => setDay(e.target.value)}
        />
      </div>
      <div>
        <label>MONTH</label>
        <input
          type="text"
          placeholder="MM"
          maxLength="2"
          value={month}
          onChange={e => setMonth(e.target.value)}
        />
      </div>
      <div>
        <label>YEAR</label>
        <input
          type="text"
          placeholder="YYYY"
          maxLength="4"
          value={year}
          onChange={e => setYear(e.target.value)}
        />
      </div>
      <button onClick={onSubmit} >
        <span>{'\u2193'}</span>
      </button>
    </div>
  );
}
