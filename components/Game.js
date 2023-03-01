"use client";

import { useState } from "react";
import { calculateWinner } from "@/helpers/calculateWinner";
import Board from "./Board";
import styles from "@/styles/Game.module.css";

export default function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  // const [board, setBoard] = useState([
  //   null,
  //   null,
  //   null,
  //   null,
  //   null,
  //   null,
  //   null,
  //   null,
  //   null,
  // ]);
  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(board);

  const handleClick = (i) => {
    const boardCopy = [...board];
    if (winner || boardCopy[i]) return;
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXIsNext(!xIsNext);
  };

  const jumpTo = () => {};

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  };

  return (
    <div className={styles.game}>
      <Board squares={board} onClick={handleClick} />
      <div className={styles.gameInfo}>
        <div>
          {winner
            ? `Zwycięzca: ${winner}`
            : `Następny ruch: ${xIsNext ? "X" : "O"}`}
        </div>
        <div>
          <button onClick={restartGame}>Nowa gra</button>
        </div>
      </div>
    </div>
  );
}
