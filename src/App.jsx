import React, { useState } from 'react'
import './App.css'

// --- Tic-Tac-Toe Game ---
const emptyBoard = Array(9).fill(null);

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const TicTacToe = () => {
  const [squares, setSquares] = useState(emptyBoard);
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(squares);
  const isDraw = !winner && squares.every(Boolean);

  function handleClick(idx) {
    if (squares[idx] || winner) return;
    const nextSquares = squares.slice();
    nextSquares[idx] = xIsNext ? 'X' : 'O';
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  function handleReset() {
    setSquares(emptyBoard);
    setXIsNext(true);
  }

  return (
    <div className="ttt-container">
      <h2 className="ttt-title">Tic-Tac-Toe Game</h2>
      <div className="ttt-board">
        {squares.map((val, idx) => (
          <button key={idx} className="ttt-square" onClick={() => handleClick(idx)}>
            {val}
          </button>
        ))}
      </div>
      <div className="ttt-status">
        {winner ? `Winner: ${winner}` : isDraw ? "It's a draw!" : `Next: ${xIsNext ? 'X' : 'O'}`}
      </div>
      <button className="ttt-reset" onClick={handleReset}>Restart</button>
    </div>
  );
};

const App = () => {
  return (
    <div className="hello-world-container">
      <header className="header">
        <h1>Hello, World!</h1>
        <h3 className="subtitle">Enjoy a classic game of Tic-Tac-Toe</h3>
      </header>
      <main>
        <TicTacToe />
      </main>
      <footer className="footer">Made by B Suraj Patra  </footer>
    </div>
  )
}

export default App
