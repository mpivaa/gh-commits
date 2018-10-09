import React from 'react';
import renderer from 'react-test-renderer';
import { StaticRouter } from 'react-router-dom';
import { CommitList } from './CommitList';

it('renders a list of commits', () => {
  let tree = renderer
    .create(
      <StaticRouter location="/somelogin/somerepo" context={{}}>
        <CommitList
          commits={[
            {
              abbreviatedOid: 'abc',
              message: 'Some message',
              author: {
                name: 'Some author',
                avatarUrl: '...'
              }
            }
          ]}
        />
      </StaticRouter>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
