import './App.css'
import ReducerComponent from './ReducerComponent'
import Counter from './Counter'
import PokemonWithUnmountCheckbox from './PokemonContainer'
import ContextContainer from './ContextContainer'
import HeadersContext from './HeadersContext'

function App() {
  return (
    <div className="App">
      <HeadersContext />
      <ReducerComponent />
      <Counter />
      <PokemonWithUnmountCheckbox />
      <ContextContainer />
    </div>
  )
}

export default App
