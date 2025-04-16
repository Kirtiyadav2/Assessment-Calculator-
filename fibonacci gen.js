// src/components/FibonacciGenerator.js
import React, { useState } from 'react';

const FibonacciGenerator = () => {
  const [count, setCount] = useState('');
  const [series, setSeries] = useState([]);
  const [error, setError] = useState('');

  const generateFibonacci = (n) => {
    if (n <= 0) return [];
    if (n === 1) return [0];
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
      fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const num = parseInt(count);
    if (isNaN(num) || num <= 0) {
      setError('❌ Please enter a valid positive number');
      setSeries([]);
      return;
    }

    setSeries(generateFibonacci(num));
    setError('');
  };

  return (
    <section className="calculator-container">
      <h2>📈 Fibonacci Generator</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          className="input"
          value={count}
          onChange={(e) => setCount(e.target.value)}
          placeholder="e.g. 5"
        />
        <button className="button">Generate</button>
      </form>

      {series.length > 0 && (
        <div className="response">
          <h4>✅ Result: {series.join(', ')}</h4>
          <details>
            <summary className="summary">Mock API</summary>
            <pre className="api-box">{`POST /api/fibonacci
Request:
{
  "count": ${count}
}

Response:
{
  "series": [${series.join(', ')}]
}`}</pre>
          </details>
        </div>
      )}
      {error && <p className="error">{error}</p>}
    </section>
  );
};

export default FibonacciGenerator;
