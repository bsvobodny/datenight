import { Route } from 'wouter'
import Home from './Home'
import Settings from './Settings'

function App() {
  return (
    <>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/settings">
        <Settings />
      </Route>
    </>
  )
}

export default App
