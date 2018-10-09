import React from 'react';
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router-dom';
import { RepoOwner } from './RepoOwner';

it('renders a list of repositories', () => {
  let tree = renderer
    .create(
      <StaticRouter location="/somelogin" context={{}}>
        <RepoOwner
          owner={{
            avatarUrl: '...',
            login: 'somelogin'
          }}
          repos={[
            {
              name: 'somerepo',
              owner: {
                avatarUrl: '...',
                login: 'somelogin'
              }
            }
          ]}
        />
      </StaticRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
