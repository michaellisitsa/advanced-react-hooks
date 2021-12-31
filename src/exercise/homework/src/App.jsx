import './App.css'
import ReducerComponent from './ReducerComponent'
import Counter from './Counter'
import PokemonWithUnmountCheckbox from './PokemonContainer'

function App() {
  return (
    <div className="App">
      <ReducerComponent />
      <Counter />
      <PokemonWithUnmountCheckbox />
    </div>
  )
}

export default App
