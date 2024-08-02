import { createContext, type Dispatch } from 'react';
import { GameActionType, type GameStateType } from '../types/types';

export const INITAL_GAME_STATE: GameStateType = {
  gameMoves: ['', '', '', '', '', '', '', '', ''],
  currentPlayer: 'X',
  winner: null,
};

export const GameContext = createContext<{ state: GameStateType; dispatch: Dispatch<GameActionType>}>({state: INITAL_GAME_STATE, dispatch: () => null});

export const calculateWinner = (gameMoves: GameStateType['gameMoves']) => {
  const lines = [
    // Horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonal
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (gameMoves[a] && gameMoves[a] === gameMoves[b] && gameMoves[a] === gameMoves[c]) {
      return gameMoves[a];
    }
  }

  return null;
};