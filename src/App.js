import logo from "./logo.svg";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
// takes query strings and converts them into something we can use
import gql from "graphql-tag";

// Connects our site to the GraphQL API
const client = new ApolloClient({
  uri: "https://api-us-west-2.graphcms.com/v2/ckqbj4j9t5jbc01z10krle140/master",
});

const POSTS_QUERY = gql`
  query allPosts{
    posts {
      id
      title
      body
    }
  }
`;

// client
//   .query({
//     query: testQuery,
//   })
//   .then((res) => console.log(res));

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Query query={POSTS_QUERY}>
          {({ loading, data }) => {
            if (loading) return "Loading...";
            // equivalent to saying data.posts, but we're actually pulling the posts var out of the data object
            const { posts } = data;
            return posts.map((post) => <h1>{post.title}</h1>);
          }}
        </Query>
      </div>
    </ApolloProvider>
  );
}

export default App;
