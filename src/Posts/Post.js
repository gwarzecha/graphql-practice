import React, { Component } from "react";
import { Query } from "react-apollo";
// takes query strings and converts them into something we can use
import gql from "graphql-tag";

export default class Post extends Component {
  render() {
    const { match } = this.props;
    return (
      <Query query={POST_QUERY}
      variables={{
        // id property from the query, minus the $-sign
        id: match.params.id
      }}>
        {({ data, loading }) => {
          if ( loading ) return 'Loading...';
          // post comes from the name of the query-type below
          const { post } = data;
          return <h1>{post.title}</h1>;
        }}
      </Query>
    );
  }
}

const POST_QUERY = gql`
  query post($id: ID!) {
    post(where: { id: $id }) {
      id
      title
      body
    }
  }
`;
