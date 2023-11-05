import './style/game.css'

const Game = (props) => {
    return (
        <div>
            <img className='game-image' src={props.game} alt="game images"></img>
        </div>
    )   
}

export default Game