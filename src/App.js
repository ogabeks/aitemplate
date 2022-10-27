import Home from "./Screens/Home";
import Side from "./Components/Side";
import { Row, Col, Container } from "react-bootstrap";
import { Switch, Route, useLocation } from "react-router-dom";
import "./App.css";
import Reports from "./Screens/Reports";
import Settings from "./Screens/Settings";
import Login from "./Screens/Login";
import Landing from "./Screens/Landing";

function App() {
  const link = useLocation();
  const styles = () => {
    if (link.pathname === "/" || link.pathname === "/login") {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className={styles() && "app"}>
      {styles() && <Side />}

      <div className={styles() && "content"}>
        <Switch>
          <Route path="/" exact>
            <Landing />
          </Route>
          <Route path="/home">
            <Home />
          </Route>

          <Route path="/reports">
            <Reports />
          </Route>

          <Route path="/settings">
            <Settings />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
