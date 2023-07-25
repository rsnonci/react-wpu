import { useState } from 'react'
import Square from './components/Square'

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClick(index) {
      if (squares[index]) return;
      
      const nextSquares = squares.slice()
      nextSquares[index] = xIsNext ? 'X' : 'O'

      setSquares(nextSquares)
      setXIsNext(!xIsNext)
  }

  return (
    <div className='board'>
      {squares.map((value, index) => (
        <Square key={index} value={value} onSquareClick={() => handleClick(index)}/>
      ))}
    </div>
  )
}

export default Board
