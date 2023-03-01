import Square from "./Square";
import styles from "@/styles/Board.module.css";

export default function Board({ squares, onClick }) {
  const renderSquares = squares.map((square, i) => (
    <Square key={i} value={square} onClick={() => onClick(i)} />
  ));

  return <div className={styles.board}>{renderSquares}</div>;
}
