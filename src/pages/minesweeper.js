import React, { useState } from "react";
import "./minesweeper.css";

const CELL_VALUE_MINE = -1;
const CELL_VALUE_REVEALED = -2;

const ROW_COUNT = 10;
const COL_COUNT = 10;
const MINES_COUNT = 5;

export default function Minesweeper() {
  const [board, setBoard] = useState(
    generateBoard(ROW_COUNT, COL_COUNT, MINES_COUNT)
  );
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  const handleCellClick = (rowIndex, cellIndex) => {
    const newBoard = updateBoardWithRevealedCells(board, rowIndex, cellIndex);
    setBoard(newBoard);

    if (newBoard[rowIndex][cellIndex].value === CELL_VALUE_MINE) {
      setGameOver(true);
    }

    if (
      newBoard.every((row) =>
        row.every((cell) => cell.isRevealed || cell.value === CELL_VALUE_MINE)
      )
    ) {
      setGameWon(true);
    }
  };

  return (
    <main>
      <h2>Minesweeper</h2>

      {gameOver && <div className="game-over">Game Over</div>}
      {gameWon && <div className="game-won">Game Won</div>}
      <div className="game-controls">
        <button
          onClick={() => {
            setGameOver(false);
            setBoard(generateBoard(ROW_COUNT, COL_COUNT, MINES_COUNT));
          }}
        >
          Reset
        </button>
      </div>

      <div className="minesweeper-board">
        {board.map((row, rowIndex) => (
          <div className="board-row" key={rowIndex}>
            {row.map((cell, cellIndex) => {
              let displayValue = "";

              if (cell.isRevealed) {
                displayValue = cell.value;

                if (cell.value === CELL_VALUE_MINE) {
                  displayValue = "💣";
                }
              }

              return (
                <div
                  className={`cell ${cell.isRevealed ? "revealed" : ""}`}
                  key={cellIndex}
                  onClick={() => handleCellClick(rowIndex, cellIndex)}
                >
                  {displayValue}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </main>
  );
}

function generateBoard(rows, cols, mines) {
  const board = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => ({ value: 0, isRevealed: false }))
  );

  // Place mines randomly
  for (let i = 0; i < mines; i++) {
    const row = Math.floor(Math.random() * rows);
    const col = Math.floor(Math.random() * cols);
    board[row][col].value = CELL_VALUE_MINE;

    // Update the number of adjacent mines for neighboring cells
    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        const newRow = row + dr;
        const newCol = col + dc;
        if (
          newRow >= 0 &&
          newRow < rows &&
          newCol >= 0 &&
          newCol < cols &&
          board[newRow][newCol].value !== CELL_VALUE_MINE
        ) {
          board[newRow][newCol].value++;
        }
      }
    }
  }

  return board;
}

function updateBoardWithRevealedCells(board, row, col) {
  board[row][col].isRevealed = true;

  const newBoard = revealAdjacentCells(board, row, col);

  return newBoard;
}

function revealAdjacentCells(board, row, col) {
  if (board[row][col].value === 0) {
    board[row][col].isRevealed = true;
    board[row][col].value = CELL_VALUE_REVEALED;

    for (let dr = -1; dr <= 1; dr++) {
      for (let dc = -1; dc <= 1; dc++) {
        if (
          row + dr >= 0 &&
          row + dr < board.length &&
          col + dc >= 0 &&
          col + dc < board[0].length
        ) {
          revealAdjacentCells(board, row + dr, col + dc);
        }
      }
    }
  }

  return JSON.parse(JSON.stringify(board));
}
