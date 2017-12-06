import React from "react";
import { Link } from "react-router-dom";
import { Menu, Input } from "semantic-ui-react";
import { connect } from "react-redux";

const Navigation = props => {
  return (
    <Menu pointing>
      <Menu.Item name="home">
        {" "}
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item name="cards">
        {" "}
        <Link to="/addthings">Add Things</Link>
      </Menu.Item>

      {!!props.username ? (
        <Menu.Item name="profile">
          <Link to="/profile">{props.username}</Link>
        </Menu.Item>
      ) : (
        <Menu.Item name="login">
          <Link to="/login">Log In / Sign Up</Link>
        </Menu.Item>
      )}

      <Menu.Menu position="right">
        <Menu.Item>
          <Input icon="search" placeholder="Search..." />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
  );
};

const mapStateToProps = state => {
  return {
    ...state.dataReducer
  };
};

export default connect(mapStateToProps, undefined)(Navigation);
