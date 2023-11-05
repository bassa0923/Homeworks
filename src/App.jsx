
import cs2 from './assets/images/cs2.jpg'
import dota2 from './assets/images/Dota2.jpg'
import hs from './assets/images/HearthStone.jpg'
import Game from './Game'
import './style/app.css'

function App() {

  const gameList = [cs2, dota2, hs];

  return (
    <div className='games'>
      {gameList.map((game, id) => (
        <Game 
          game={game}
          key={id}
        />
      ))}

    </div>
  )
    
}

export default App
