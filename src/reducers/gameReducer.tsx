import { type GameActionType, type GameStateType } from '../types/types';
import { calculateWinner, INITAL_GAME_STATE } from '../utils/constants';

export function gameReducer(state: GameStateType, action: GameActionType) {
  const { type } = action;

  switch (type) {
    case 'MAKE_MOVE': {
      const newGameMoves = state.gameMoves.map((playerMove, index) => {
        const signToPlace = state.currentPlayer;
        if (index === action.payload) {
          return signToPlace;
        }
    
        return playerMove;
      });

      return {
        ...state,
        gameMoves: newGameMoves,
        currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
      };
    }

    case 'CHECK_WINNER': {
      const getWinner = calculateWinner(state.gameMoves);

      return {
        ...state,
        winner: getWinner,
      };
    }

    case 'RESET_GAME':
      return INITAL_GAME_STATE;

    default:
      return state;
  }
}