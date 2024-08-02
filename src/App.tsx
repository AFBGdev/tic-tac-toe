import Gameboard from './components/Gameboard'
import GameContextProvider from './contexts/GameContext';
import './App.css'

function App() {

  return (
    <GameContextProvider>
      <Gameboard />
    </GameContextProvider>
  )
}

export default App
