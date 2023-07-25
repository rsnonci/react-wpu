import { useState } from 'react'
import Square from './components/Square'

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(index) {
      if (squares[index] || calculateWinner(squares)) return;

      const nextSquares = squares.slice()
      nextSquares[index] = xIsNext ? 'X' : 'O'

      setSquares(nextSquares)
      setXIsNext(!xIsNext)
  }

  let status = calculateWinner(squares)? `Winner: ${calculateWinner(squares)}` : `Next player: ${xIsNext ? 'X' : 'O'}`

  return (
    <>
      <div className='status'>
        {status}
      </div>
      <div className='board'>
        {squares.map((value, index) => (
          <Square key={index} value={value} onSquareClick={() => handleClick(index)}/>
        ))}
      </div>
    </>
  )
}

export default Board

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
    ]

    for (let index = 0; index < lines.length; index++) {
      const [line1, line2, line3] = lines[index];
      
      if (squares[line1] && squares[line1] == squares[line2] && squares[line1] == squares[line3]) {
        return squares[line1]
      }
    }

    return false
}
