// @flow
import React, { Component } from 'react';
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { Layout } from './Layout';
import { ConnectedRepoOwner as RepoOwner } from './repo-owner';

let GITHUB_TOKEN: string = process.env.REACT_APP_GITHUB_TOKEN || '';

let httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql'
});

let authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${GITHUB_TOKEN}`
    }
  };
});

let client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

class App extends Component<{}> {
  render() {
    return (
      <ApolloProvider client={client}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <Layout>
              <Route
                path="/:owner"
                render={({ match: { params } }) => (
                  <RepoOwner login={params.owner} />
                )}
              />
            </Layout>
          </ThemeProvider>
        </BrowserRouter>
      </ApolloProvider>
    );
  }
}

export default App;
