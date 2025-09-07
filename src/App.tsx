import { Route, Router, Switch } from 'wouter'
import Game from './pages/Game'
import Home from './pages/Home'
import CoupleQuiz from './pages/Quiz'
import Settings from './pages/Settings'
import { SwipeActivities } from './pages/SwipeActivities'

function App() {
  return (
    <Switch>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/quiz">
        <CoupleQuiz />
      </Route>
      <Route path="/game">
        <Game />
      </Route>
      <Switch>
        <Router base="/game">
          <Route path="/settings">
            <Settings />
          </Route>
          <Route path="/swipe">
            <SwipeActivities />
          </Route>
        </Router>
      </Switch>
      <Route path="*">
        {(params) => `404, Sorry the page ${params['*']} does not exist!`}
      </Route>
    </Switch>
  )
}

export default App
