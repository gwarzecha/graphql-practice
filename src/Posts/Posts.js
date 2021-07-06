import React, { Component } from "react";
import { Query } from "react-apollo";
// takes query strings and converts them into something we can use
import gql from "graphql-tag";
import { Link } from "react-router-dom";

export default class Posts extends Component {
  render() {
    return (
      <ul>
        <Query query={POSTS_QUERY}>
          {({ loading, data }) => {
            if (loading) return "Loading...";
            // equivalent to saying data.posts, but we're actually pulling the posts var out of the data object
            const { posts } = data;
            return posts.map((post) => (
              <li key={post.id} >
                {/* // key to each post iteration will be its post ID */}
                <Link to={`/post/${post.id}`}>
                  <h1>{post.title}</h1>
                </Link>
              </li>
            ));
          }}
        </Query>
      </ul>
    );
  }
}

const POSTS_QUERY = gql`
  query allPosts {
    posts {
      id
      title
      body
    }
  }
`;
