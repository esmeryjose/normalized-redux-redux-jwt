import React from "react";
import { connect } from "react-redux";
import { logOutUser } from "../actions/data";
import {
  Card,
  Image,
  Icon,
  Segment,
  Grid,
  Header,
  Container
} from "semantic-ui-react";

class Profile extends React.Component {
  handleLogout = () => {
    localStorage.removeItem("jwt");
    this.props.logOutUser();
  };

  render() {
    console.log(this.props);
    if (this.props.entities.users[this.props.user_id]) {
      const userPosts = this.props.entities.users[this.props.user_id].posts.map(
        post_id => (
          <Card key={post_id} fluid>
            <Card.Header textAlign="center">
              {this.props.entities.posts[post_id].title}
            </Card.Header>
            <Card.Content>
              {this.props.entities.posts[post_id].content}
            </Card.Content>
          </Card>
        )
      );
      const userComments = this.props.entities.users[
        this.props.user_id
      ].comments.map(comment_id => (
        <Card key={comment_id} fluid>
          <Card.Header textAlign="center">
            Post {this.props.entities.comments[comment_id].post_id}
          </Card.Header>
          <Card.Content>
            {this.props.entities.comments[comment_id].content}
          </Card.Content>
        </Card>
      ));
      return (
        <Container>
          <Grid>
            <Grid.Row centered>
              <Card>
                <Image
                  src={this.props.entities.users[this.props.user_id].img_url}
                />
                <Card.Content>
                  <Card.Header textAlign="left">
                    {this.props.entities.users[this.props.user_id].name}
                  </Card.Header>
                  <Card.Meta textAlign="left">
                    {this.props.entities.users[this.props.user_id].username}
                  </Card.Meta>
                  <Card.Description textAlign="left">
                    {this.props.entities.users[this.props.user_id].name}
                  </Card.Description>
                </Card.Content>
                <Card.Content extra textAlign="left">
                  <div>
                    <a>
                      <Icon name="book" />
                      {
                        this.props.entities.users[this.props.user_id].posts
                          .length
                      }
                      {` Post${
                        this.props.entities.users[this.props.user_id].posts
                          .length !== 1
                          ? "s"
                          : ""
                      }`}
                    </a>
                  </div>
                  <div>
                    <a>
                      <Icon name="reply" />
                      {
                        this.props.entities.users[this.props.user_id].comments
                          .length
                      }
                      {` Comment${
                        this.props.entities.users[this.props.user_id].comments
                          .length !== 1
                          ? "s"
                          : ""
                      }`}
                    </a>
                  </div>
                </Card.Content>
              </Card>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column computer={8} mobile={16} tablet={8}>
                <Segment>
                  <Header textAlign="center">Posts</Header>
                  {userPosts}
                </Segment>
              </Grid.Column>
              <Grid.Column computer={8} mobile={16} tablet={8}>
                <Segment>
                  <Header textAlign="center">Comments</Header>
                  {userComments}
                </Segment>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <button onClick={this.handleLogout}>Logout</button>
            </Grid.Row>
          </Grid>
        </Container>
      );
    } else {
      return <div>..loading..</div>;
    }
  }
}

const mapStateToProps = ({ dataReducer }) => ({
  ...dataReducer
});

export default connect(mapStateToProps, { logOutUser })(Profile);
