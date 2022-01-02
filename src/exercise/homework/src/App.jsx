import './App.css'
import ReducerComponent from './ReducerComponent'
import Counter from './Counter'
import PokemonCached from './PokemonCached'
import ContextContainer from './ContextContainer'
import HeadersContext from './HeadersContext'

function App() {
  return (
    <div className="App">
      <HeadersContext />
      <ReducerComponent />
      <Counter />
      <PokemonCached />
      <ContextContainer />
    </div>
  )
}

export default App
