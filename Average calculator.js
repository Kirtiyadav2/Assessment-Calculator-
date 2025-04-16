import React, { useState } from 'react';

const AverageCalculator = () => {
  const [input, setInput] = useState('');
  const [average, setAverage] = useState(null);
  const [error, setError] = useState('');

  const handleCalculate = (e) => {
    e.preventDefault();
    const numbers = input.split(',').map(num => parseFloat(num.trim()));
    if (numbers.some(isNaN)) {
      setError('❌ Please enter valid comma-separated numbers');
      setAverage(null);
      return;
    }
    const sum = numbers.reduce((a, b) => a + b, 0);
    const avg = sum / numbers.length;
    setAverage(avg);
    setError('');
  };

  return (
    <section className="calculator-container">
      <h2>📊 Average Calculator</h2>
      <form onSubmit={handleCalculate} className="form">
        <input
          type="text"
          className="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g. 1, 2, 3, 4"
        />
        <button type="submit" className="button">Calculate Average</button>
      </form>

      {average !== null && (
        <div className="response">
          <h4>✅ Result: {average}</h4>
          <details>
            <summary className="summary">🔍 Mock API</summary>
            <pre className="api-box">{`POST /api/average
Request:
{
  "numbers": [${input}]
}

Response:
{
  "average": ${average}
}`}</pre>
          </details>
        </div>
      )}

      {error && <p className="error">{error}</p>}
    </section>
  );
};

export default AverageCalculator;
