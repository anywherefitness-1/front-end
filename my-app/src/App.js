import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import "./App.css";

// Material ui imports
import { ThemeProvider } from "@material-ui/core";

// Component Imports
import HomePage from "./Components/Home_Components/HomePage";
import Theme from "./Components/Home_Components/Theme";
import RegistrationForm from "./Components/Login_Components/Registration";
import LoginForm from "./Components/Login_Components/Login";
import ClientLogin from "./Components/Login_Components/Client_Login";
import InstructorLogin from "./Components/Login_Components/Client_Login";
import InstructorClasses from "./Components/Classes_Components/InstructClass";
import PrivateRoute from "./Utils/PrivateRoute";
function App() {
  return (
    <div className="App">
      <ThemeProvider theme={Theme}>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/Users" />
            <Route exact path="/Register" component={RegistrationForm} />
            <Route exact path="/Login" component={LoginForm} />
            <Route exact path="/LoginJack" component={ClientLogin} />
            <Route exact path="/InstructorJack" component={InstructorLogin} />
            <PrivateRoute
              exact
              path="/InstructorClasses"
              component={InstructorClasses}
            />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
