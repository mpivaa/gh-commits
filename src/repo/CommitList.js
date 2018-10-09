// @flow
import * as React from 'react';
import styled from 'styled-components';
import fuzzysearch from 'fuzzysearch';
import { spacing, color } from '../theme';
import { Normal, Avatar, TextField } from '../ui';
import type { Commit } from './types';

let CommitListStyle = styled.ul`
  flex: 1;
  overflow-y: auto;
`;

let CommitItem = styled.li`
  display: flex;
  align-items: center;
  padding: ${spacing('xxs')} 0;
`;

let Message = styled(Normal)`
  flex: 1;
  color: ${color('grey')};
  margin-right: ${spacing('sm')};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

let CommitID = styled(Normal)`
  flex: 0;
  font-weight: bold;
  margin-right: ${spacing('sm')};
`;

let Author = styled.div`
  display: flex;
  align-items: center;
`;

let AuthorName = styled(Normal)`
  width: 100px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-left: ${spacing('sm')};
`;

type Props = {
  commits: Commit[]
};

type State = {
  search: string
};

class CommitList extends React.Component<Props, State> {
  state = { search: '' };

  render() {
    let { commits } = this.props;
    let { search } = this.state;

    // Github API doesn't provide a way to filter all commits
    let filteredCommits = commits.filter(commit =>
      fuzzysearch(search, commit.message)
    );

    return (
      <CommitListStyle>
        <TextField
          type="text"
          value={search}
          placeholder="Search..."
          onChange={e => this.setState({ search: e.target.value })}
        />
        {filteredCommits.map(commit => (
          <CommitItem key={commit.abbreviatedOid}>
            <CommitID>{commit.abbreviatedOid}</CommitID>
            <Message>{commit.message}</Message>
            <Author>
              <Avatar src={commit.author.avatarUrl} size={24} />
              <AuthorName>{commit.author.name}</AuthorName>
            </Author>
          </CommitItem>
        ))}
      </CommitListStyle>
    );
  }
}

export { CommitList };
