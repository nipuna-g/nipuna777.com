import React, { useState } from "react";
import "./minesweeper.css";

export default function Minesweeper() {
  const [board, setBoard] = useState([
    [
      { value: 1, isRevealed: false },
      { value: -1, isRevealed: false },
      { value: 1, isRevealed: false },
    ],
    [
      { value: 0, isRevealed: false },
      { value: 1, isRevealed: false },
      { value: 0, isRevealed: false },
    ],
    [
      { value: 0, isRevealed: false },
      { value: 0, isRevealed: false },
      { value: 0, isRevealed: false },
    ],
  ]);

  const handleCellClick = (rowIndex, cellIndex) => {
    const newBoard = [...board];
    newBoard[rowIndex][cellIndex].isRevealed = true;
    setBoard(newBoard);
  };

  return (
    <main>
      <h2>Minesweeper</h2>

      <div className="minesweeper-board">
        {board.map((row, rowIndex) => (
          <div className="board-row" key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <div
                className={`cell ${cell.isRevealed ? "revealed" : ""}`}
                key={cellIndex}
                onClick={() => handleCellClick(rowIndex, cellIndex)}
              >
                {cell.isRevealed ? cell.value : "-"}
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  );
}
