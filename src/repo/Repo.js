// @flow
import * as React from 'react';
import styled from 'styled-components';
import { spacing, color } from '../theme';
import { Title, Subtitle, Heading } from '../ui';
import { ConnectedCommitList as CommitList } from './ConnectedCommitList';
import type { Repository } from './types';

let RepoStyle = styled.div`
  height: 100%;
  overflow: hidden;
`;

let Header = styled.div`
  flex: 0;
  display: grid;
  grid-template-rows: 32px 1fr;
  grid-gap: ${spacing('sm')};
  align-items: center;
  padding: ${spacing('lg')};
  border-bottom: 1px solid ${color('lightgrey')};
`;

let Body = styled.div`
  padding: ${spacing('lg')};
`;

type Props = {
  repo: Repository
};

function Repo({ repo }: Props) {
  return (
    <RepoStyle>
      <Header>
        <Title>{repo.name}</Title>
        <Subtitle>{repo.description}</Subtitle>
      </Header>
      <Body>
        <Heading>Commits</Heading>
        <CommitList repo={repo.name} owner={repo.owner.login} />
      </Body>
    </RepoStyle>
  );
}

export { Repo };
