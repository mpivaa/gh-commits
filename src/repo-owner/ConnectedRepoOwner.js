// @flow
import * as React from 'react';
import { get } from 'lodash';
import { Query } from 'react-apollo';
import { gql } from 'graphql.macro';
import { RepoOwner } from './RepoOwner';

let query = gql`
  query QueryRepositoryOwner($login: String!) {
    repositoryOwner(login: $login) {
      login
      avatarUrl
      repositories(
        first: 100
        orderBy: { field: CREATED_AT, direction: DESC }
      ) {
        nodes {
          name
          description
          owner {
            login
          }
        }
      }
    }
  }
`;

type Props = {
  login: string
};

function ConnectedRepoOwner({ login }: Props) {
  return (
    <Query query={query} variables={{ login }}>
      {({ data, loading, error }) => {
        if (loading) return null;
        let owner = data.repositoryOwner;
        let repos = get(data, 'repositoryOwner.repositories.nodes', []);
        return <RepoOwner owner={owner} repos={repos} />;
      }}
    </Query>
  );
}

export { ConnectedRepoOwner };
