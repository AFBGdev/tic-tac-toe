import { useReducer, type FC } from 'react';
import { gameReducer } from '../reducers/gameReducer';
import { GameContext, INITAL_GAME_STATE } from '../utils/constants';

const GameContextProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, INITAL_GAME_STATE);

  if (state === null) {
    throw new Error('useGameContext must be used within a GameContextProvider');
  }

  if (dispatch === null) {
    throw new Error('useGameContext must be used within a GameContextProvider');
  }

  return (
    <GameContext.Provider value={{state: state, dispatch}}>
      {children}
    </GameContext.Provider>
  )
}

export default GameContextProvider;