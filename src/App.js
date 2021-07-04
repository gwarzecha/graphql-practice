import logo from "./logo.svg";
import "./App.css";

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
// takes query strings and converts them into something we can use
import gql from "graphql-tag";

const client = new ApolloClient({
  uri: "https://api-us-west-2.graphcms.com/v2/ckqbj4j9t5jbc01z10krle140/master",
});

const testQuery = gql`
  {
    posts {
      id
      title
      body
    }
  }
`;

client
  .query({
    query: testQuery,
  })
  .then((res) => console.log(res));

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ApolloProvider>
  );
}

export default App;
