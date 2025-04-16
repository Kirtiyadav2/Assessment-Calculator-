// src/components/PrimeChecker.js
import React, { useState } from 'react';

const PrimeChecker = () => {
  const [input, setInput] = useState('');
  const [isPrime, setIsPrime] = useState(null);
  const [error, setError] = useState('');

  const checkPrime = (n) => {
    if (n <= 1) return false;
    if (n === 2) return true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const num = parseInt(input);
    if (isNaN(num)) {
      setError('❌ Please enter a valid number');
      setIsPrime(null);
      return;
    }

    const result = checkPrime(num);
    setIsPrime(result);
    setError('');
  };

  return (
    <section className="calculator-container">
      <h2>🔍 Prime Number Checker</h2>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          className="input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="e.g. 7"
        />
        <button className="button">Check</button>
      </form>

      {isPrime !== null && (
        <div className="response">
          <h4>✅ Result: {input} is {isPrime ? 'a Prime Number' : 'not a Prime Number'}</h4>
          <details>
            <summary className="summary">Mock API</summary>
            <pre className="api-box">{`POST /api/prime
Request:
{
  "number": ${input}
}

Response:
{
  "isPrime": ${isPrime}
}`}</pre>
          </details>
        </div>
      )}
      {error && <p className="error">{error}</p>}
    </section>
  );
};

export default PrimeChecker;
