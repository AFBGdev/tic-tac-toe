export const PlayerSignType = 'X' | 'O';

export type GameStateType = {
  gameMoves: string[],
  currentPlayer: PlayerSignType,
  winner: PlayerSignType | null,
}

export type GameActionType =
  | { type: 'MAKE_MOVE', payload: rowIndex }
  | { type: 'CHECK_WINNER' }
  | { type: 'RESET_GAME' }