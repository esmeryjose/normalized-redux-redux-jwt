import React from "react";
import { connect } from "react-redux";
import { setData } from "../actions/data";

class Profile extends React.Component {
  state = {
    postTitle: "",
    postContent: "",

    postComment: "",
    commentContent: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    if (event.target.name === "post") {
    } else if (event.target.name === "comment") {
    }
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <div>
          <label>Add Post</label>
          <div>
            <input
              type="text"
              name="postTitle"
              value={this.state.postTitle}
              onChange={this.handleChange}
              placeholder="Post Title"
            />
            <input
              type="text"
              name="postContent"
              value={this.state.postContent}
              onChange={this.handleChange}
              placeholder="Post Content"
            />
            <button name="post" onClick={this.handleSubmit}>
              Add Post
            </button>
          </div>
        </div>
        <div>
          <label>Add Comment</label>
          <div>
            <input
              type="text"
              name="postComment"
              value={this.state.postComment}
              onChange={this.handleChange}
              placeholder="Post ID"
            />
            <input
              type="text"
              name="commentContent"
              value={this.state.commentContent}
              onChange={this.handleChange}
              placeholder="Comment Content"
            />
            <button name="comment" onClick={this.handleSubmit}>
              Add Comment
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ username: state.dataReducer.username });

export default connect(mapStateToProps, { setData })(Profile);
