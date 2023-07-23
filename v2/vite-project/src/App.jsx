import { useState } from 'react'
import Header from './components/Header'

function App() {
    const people = ['Person 1', 'Person 2', 'Person 3']
    const [likes, setLikes] = useState(0)

    function handleClick(){
      setLikes(likes+1)
    }
    
    return (
      <>
        <Header/>
        <Header message="message"/>
        <ul>
          {
            people.map((person) => (
              <li key={person}>{person}</li>
            ))
          }
        </ul>
        <button onClick={handleClick}>Like({likes})</button>
      </>
    )
}

export default App
