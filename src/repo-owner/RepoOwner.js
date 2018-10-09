// @flow
import * as React from 'react';
import styled from 'styled-components';
import { find } from 'lodash';
import { spacing, color, radius } from '../theme';
import { Route } from 'react-router-dom';
import { Heading, Avatar } from '../ui';
import { RepoList } from './RepoList';
import { Repo } from '../repo';
import type { Repository } from '../repo';
import type { Owner } from './types';

let RepoOwnerStyle = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 300px 1fr;
  border: 1px solid ${color('lightgrey')};
  border-radius: ${radius};
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.02);
  overflow: hidden;
`;

let Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  border-right: 1px solid ${color('lightgrey')};
  overflow: hidden;
`;

let Header = styled.div`
  flex: 0;
  display: grid;
  grid-template-columns: 32px 1fr;
  grid-gap: ${spacing('sm')};
  align-items: center;
  padding: ${spacing('md')};
  border-bottom: 1px solid ${color('lightgrey')};
`;

type Props = {
  owner: Owner,
  repos: Repository[]
};

function RepoOwner({ owner, repos }: Props) {
  return (
    <RepoOwnerStyle>
      <Sidebar>
        <Header>
          <Avatar src={owner.avatarUrl} />
          <Heading as="h3">{owner.login}</Heading>
        </Header>
        <RepoList repos={repos} owner={owner} />
      </Sidebar>
      <Route
        exact
        path="/:owner/:repo"
        render={({
          match: {
            params: { repo }
          }
        }) => <Repo repo={find(repos, { name: repo })} />}
      />
    </RepoOwnerStyle>
  );
}

export { RepoOwner };
