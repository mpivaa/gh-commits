// @flow
import * as React from 'react';
import { get } from 'lodash';
import { Query } from 'react-apollo';
import { gql } from 'graphql.macro';
import { CommitList } from './CommitList';
import { theme } from '../theme';
import ReactPlaceholder from 'react-placeholder';

let query = gql`
  query QueryRepositoryCommits($owner: String!, $repo: String!) {
    repository(owner: $owner, name: $repo) {
      ref(qualifiedName: "master") {
        target {
          ... on Commit {
            history(first: 20) {
              nodes {
                abbreviatedOid
                message
                author {
                  name
                  avatarUrl
                }
              }
            }
          }
        }
      }
    }
  }
`;

type Props = {
  owner: string,
  repo: string
};

function ConnectedCommitList({ owner, repo }: Props) {
  return (
    <Query query={query} variables={{ owner, repo }}>
      {({ data, loading, error }) => {
        if (loading)
          return <ReactPlaceholder rows={10} color={theme.colors.lightgrey} />;
        let commits = get(data, 'repository.ref.target.history.nodes', []);
        return <CommitList commits={commits} />;
      }}
    </Query>
  );
}

export { ConnectedCommitList, query };
