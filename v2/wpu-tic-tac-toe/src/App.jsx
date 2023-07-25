import { useState } from 'react'
import Square from './components/Square'

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(index) {
      const nextSquares = squares.slice()
      nextSquares[index] = 'X'
      setSquares(nextSquares)
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
