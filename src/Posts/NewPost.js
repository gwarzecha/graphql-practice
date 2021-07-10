import React, { Component } from "react";
import PostForm from "./PostForm";
import { Mutation } from "react-apollo";
// takes query strings and converts them into something we can use
import gql from "graphql-tag";

export default class NewPost extends Component {
  state = {
    title: "",
    body: "",
  };

  handleInput = (e) => {
    const formData = {};
    formData[e.target.name] = e.target.value;
    this.setState({ ...formData });
  };

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>New Post</h1>
        {/* <PostForm /> */}
        <Mutation
          mutation={NEW_POST}
          variables={{
            title,
            body,
          }}
        >
          { createPost  => (
            <form
              onSubmit={(e) => {
                // prevents form from refreshing the page
                e.preventDefault();
                createPost()
                  .then(() => {
                    this.setState({
                      title: "",
                      body: "",
                    });
                  })
                  .catch((e) => console.log(e));
              }}
            >
              <input
                name="title"
                type="text"
                onChange={this.handleInput}
                value={title}
                placeholder="title"
              />
              <textarea
                name="body"
                type="text"
                onChange={this.handleInput}
                value={body}
                placeholder="body"
              />
              <button>Submit</button>
            </form>
          )}
        </Mutation>
      </div>
    );
  }
}

const NEW_POST = gql`
  mutation createPost($title: String!, $body: String!) {
    createPost(data: { title: $title, body: $body }) {
      title
      body
      id
    }
  }
`;