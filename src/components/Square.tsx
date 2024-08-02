import { useContext } from 'react';
import { GameContext } from '../utils/constants';

type SquarePropsType = {
  rowIndex: number;
}

function Square({rowIndex}: SquarePropsType) {
  const {state, dispatch} = useContext(GameContext);
  const squareValue = state.gameMoves[rowIndex];

  const handleClick = () => {
    dispatch({
      type: 'MAKE_MOVE',
      payload: rowIndex,
    });

    dispatch({ type: 'CHECK_WINNER' });
  }

  return (
    <button
      className='square'
      onClick={handleClick}
      disabled={squareValue !== '' || state.winner}
    >
      {squareValue}
    </button>
  );
}

export default Square;