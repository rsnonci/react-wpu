import { useState } from 'react'
import Square from './components/Square'

function Board({xIsNext, squares, onPlay}) {
  // console.log('square', squares);
  
  function handleClick(index) {
      if (squares[index] || calculateWinner(squares)) return;

      const nextSquares = squares.slice()
      nextSquares[index] = xIsNext ? 'X' : 'O'

      onPlay(nextSquares)
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

function Game() {
  const [history, setHistory] = useState([(Array(9).fill(null))])
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 ===0
  const currentSquare = history[currentMove]

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length - 1)
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove)
  }

  const moves = history.map((squares, move) => {
    const description = move > 0? `Next Move #${move}` : 'Go to start the game'

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    )
  })

  return (
    <div className='game'>
      <div className='game-board'>
        <Board xIsNext={xIsNext} squares={currentSquare} onPlay={handlePlay}/>
      </div>
      <div className='game-info'>
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

export default Game

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
