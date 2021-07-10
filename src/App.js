import logo from "./logo.svg";
import "./App.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Post from "./Posts/Post";
import NewPost from "./Posts/NewPost";
import Posts from "./Posts/Posts";

// Connects our site to the GraphQL API
const client = new ApolloClient({
  uri: "https://api-us-west-2.graphcms.com/v2/ckqbj4j9t5jbc01z10krle140/master",
});

// client
//   .query({
//     query: testQuery,
//   })
//   .then((res) => console.log(res));

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <header className="App-header">
            <Link to={"/"}>
              <h1 className="App-title">GraphQL Blog</h1>
            </Link>
          </header>

          <Link to={"/post/new"}>New Post</Link>

          <Switch>
            <Route exact path="/" component={Posts} />
            <Route exact path="/post/new" component={NewPost} />
            <Route path="/post/:id/" component={Post} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
