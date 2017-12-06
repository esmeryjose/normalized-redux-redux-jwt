import React from "react";
import { Route, withRouter, Switch, Redirect } from "react-router-dom";
import Profile from "./components/Profile";
import AddThings from "./components/AddThings";
import UsersPage from "./components/UsersPage";
import PostsPage from "./components/PostsPage";
import LoginForm from "./components/LoginForm";
import Navigation from "./components/Navigation";
import { connect } from "react-redux";
import { getCurrentUser, logOutUser, setCurrentUser } from "./actions/data";
import { getLocation } from "./actions/location";
import authorize from "./authorize";

class App extends React.Component {
  componentDidMount() {
    if (localStorage.getItem("jwt")) {
      this.props.getCurrentUser();
    }
  }

  render() {
    const AuthLoginForm = authorize(LoginForm);
    const AuthProfile = authorize(Profile);
    console.log(this.props);
    return (
      <div className="App">
        <Navigation />
        <Switch>
          <Route
            exact
            path="/profile"
            component={AuthProfile}
            {...this.props}
          />
          <Route exact path="/users" render={() => <UsersPage />} />
          <Route exact path="/posts" render={() => <PostsPage />} />
          <Route exact path="/addthings" render={() => <AddThings />} />
          <Route
            exact
            path="/login"
            render={props => <AuthLoginForm onSubmit={this.logIn} {...props} />}
          />
          <Redirect to="/profile" />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ dataReducer, locationReducer }) => ({
  data: dataReducer,
  location: locationReducer
});

export default withRouter(
  connect(mapStateToProps, {
    getCurrentUser,
    getLocation,
    logOutUser,
    setCurrentUser
  })(App)
);

//
