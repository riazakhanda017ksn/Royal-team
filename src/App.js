import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './component/Home/Home';
import PlayerDetails from './component/PlayerDetails/PlayerDetails';

function App() {
  return (
    <div>
      <div className="banner-image">
        <h1 > Royals Team</h1>
        <p>Lorem ipsum dolor sit amet,<br/> consectetur adipisicing elit.
         Dicta  <br/>dolorem   eos unde amet ullam maiores obcaecati error.</p>
      </div>
      <div>
        <Router>
          <Switch>
            <Route  exact path="/home">
               <Home/>
            </Route>
            <Route path="/home">
               <Home/>
            </Route>
            <Route path="/details/:idLeague">
              <PlayerDetails/>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
