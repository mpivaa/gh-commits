// @flow
import * as React from 'react';
import styled from 'styled-components';
import { spacing } from './theme';

let Container = styled.div`
  max-width: 1024px;
  height: 100vh;
  margin: 0 auto;
  padding: ${spacing('xl')} ${spacing('lg')};
`;

type Props = {
  children?: React.Node
};

function Layout({ children }: Props) {
  return <Container>{children}</Container>;
}

export { Layout };
