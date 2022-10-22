import Home from "./Screens/Home";
import Side from "./Components/Side";
import { Row, Col, Container } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Reports from "./Screens/Reports";
import Settings from "./Screens/Settings";

function App() {
  return (
    <div className="app">
      <Side />
      <div className="content">
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>

          <Route path="/reports">
            <Reports />
          </Route>

          <Route path="/settings">
            <Settings />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
