// @flow
import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { spacing, color } from '../theme';
import { Paragraph, Normal } from '../ui';
import type { Repository } from '../repo';
import type { Owner } from './types';

let RepoListStyle = styled.ul`
  flex: 1;
  overflow-y: scroll;
`;

let RepoItem = styled.li`
  padding: ${spacing('md')} ${spacing('lg')};
  cursor: pointer;

  &:hover {
    background: ${color('snow')};
  }
`;

let Name = styled(Normal)`
  font-weight: bold;
  margin-bottom: ${spacing('xs')};
`;

let Description = styled(Paragraph)`
  color: ${color('grey')};
`;

let UnstyledLink = styled(Link)`
  text-decoration: none;
`;

type Props = {
  repos: Repository[],
  owner: Owner
};

function RepoList({ repos, owner, onSelect }: Props) {
  return (
    <RepoListStyle>
      {repos.map(repo => (
        <UnstyledLink key={repo.name} to={`/${owner.login}/${repo.name}`}>
          <RepoItem>
            <Name>{repo.name}</Name>
            <Description>{repo.description}</Description>
          </RepoItem>
        </UnstyledLink>
      ))}
    </RepoListStyle>
  );
}

export { RepoList };
