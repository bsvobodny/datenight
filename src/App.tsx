import { Route } from 'wouter'
import Home from './pages/Home'
import Settings from './pages/Settings'

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
