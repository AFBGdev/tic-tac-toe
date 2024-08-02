import { useContext } from 'react';
import { GameContext } from '../utils/constants';
import Square from './Square';

function Gameboard() {
  const {state, dispatch} = useContext(GameContext);

  const handleResetClick = () => {
    dispatch({type: 'RESET_GAME'});
  }

  return (
    <div className='game-board'>
      {state.winner && (<h2 className='winner-text'>Winner: <span>{state.winner}</span></h2>)}
      {!state.winner && (<p className='next-player'>Next player: <span>{state.currentPlayer}</span></p>)}
      <button className='reset-button' onClick={handleResetClick}>Reset</button>

      <div className='board-rows-container'>
        <div className='board-row'>
            <Square rowIndex={0} />
            <Square rowIndex={1} />
            <Square rowIndex={2} />
        </div>

        <div className='board-row'>
            <Square rowIndex={3} />
            <Square rowIndex={4} />
            <Square rowIndex={5} />
        </div>

        <div className='board-row'>
            <Square rowIndex={6} />
            <Square rowIndex={7} />
            <Square rowIndex={8} />
        </div>
      </div>

    </div>
  )
}

export default Gameboard