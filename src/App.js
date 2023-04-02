import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track if user is logged in

  // Function to handle logging in
  const handleLogin = (username, password) => {
    // Check if the credentials are correct
    if (username === "admin" && password === "uy6837jhhdf") {
      setIsLoggedIn(true); // Set isLoggedIn state to true if credentials are correct
    }
  };

  return (
    <Router>
      <Switch>
        {/* Route for the login page */}
        <Route exact path="/">
          {isLoggedIn ? <Redirect to="/dashboard" /> : <Login onLogin={handleLogin} />}
        </Route>
        {/* Private route for the dashboard page */}
        <PrivateRoute path="/dashboard" component={Dashboard} isLoggedIn={isLoggedIn} />
      </Switch>
    </Router>
  );
};

// PrivateRoute component to prevent unauthenticated access to certain pages
const PrivateRoute = ({ component: Component, isLoggedIn, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLoggedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

export default App;

