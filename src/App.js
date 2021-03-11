
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import TeamDetails from './Components/TeamDetails/TeamDetails'
import Home from './Components/Home/Home'
import Wrong from './Components/Wrong/Wrong';

import Header from './Components/Header/Header';

function App() {
  return (
    <div className="App">

      <Router>
        <div>
        <Header></Header>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/about">
            <Home />
            </Route>
            <Route path="/teamdetails/:idTeam">
              <TeamDetails></TeamDetails>
            </Route>
            <Route exact path="/">
            <Home />
            </Route>
            <Route path="*">
              <Wrong></Wrong>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
