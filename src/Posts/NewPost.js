import React, { Component } from "react";
import PostForm from "./PostForm";
import { Mutation } from "react-apollo";
// takes query strings and converts them into something we can use
import gql from "graphql-tag";

// this is essentially a reusable form component that could be duplicated
export default class NewPost extends Component {
  render() {
    return (
      <div>
        <h1>New Post</h1>
        <Mutation mutation={NEW_POST}>
          {createPost => (
            // passes the createPost function down into the form component
            <PostForm onSubmit={createPost} />
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
