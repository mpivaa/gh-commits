// @flow
import styled from 'styled-components';
import { color, spacing } from '../theme';

let TextField = styled.input`
  border-radius: 20px;
  width: 100%;
  background: ${color('lightgrey')};
  border: none;
  outline: none;
  padding: ${spacing('sm')} ${spacing('md')};
  margin: ${spacing('sm')} 0;
`;

export { TextField };
