import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Button from "./components/button.component";
import DataLoader from "./components/data-loader.component";
import DataLoader2 from "./components/data-loader2.component";

function App() {
  return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Example 1 - Simple state with UseState</Link>
          </li>
          <li>
            <Link to="/example2">Example 2 - Fetch data withh UseEffect</Link>
          </li>
          <li>
            <Link to="/example3">Example 3 - CustomHook with for data fetch</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
      <Route path="/example3">
          <DataLoader2/>
        </Route>
        <Route path="/example2">
          <DataLoader />
        </Route>
        <Route path="/">
          <Button />
        </Route>

      </Switch>
    </div>
  </Router>
  );
}

export default App;
