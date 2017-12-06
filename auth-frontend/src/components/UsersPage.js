import React from "react";
import { connect } from "react-redux";
import {
  getCurrentUser,
  getUserData,
  getPostData,
  getCommentData
} from "../actions/data";

class UsersPage extends React.Component {
  componentDidMount() {
    this.props.getUserData();
  }

  usernames = () => {
    let names = [];
    for (let key in this.props.dataReducer.users) {
      names.push(
        <li key={key}>{this.props.dataReducer.users[key].username}</li>
      );
    }
    return names;
  };

  render() {
    return (
      <div className="wrapper">
        <div className="one">
          {!this.props.dataReducer.users ? (
            "Downloading Internet.."
          ) : (
            <div>
              <ul>{this.usernames()}</ul>
            </div>
          )}
        </div>
        <div className="two">{}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ dataReducer }) => ({
  dataReducer
});

export default connect(mapStateToProps, {
  getCurrentUser,
  getUserData,
  getPostData,
  getCommentData
})(UsersPage);
