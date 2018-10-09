// @flow
import styled from 'styled-components';

let Avatar = styled.img.attrs({ alt: 'Avatar' })`
  border-radius: 100%;
  width: ${props => props.size || '32'}px;
  height: ${props => props.size || '32'}px;
`;

export { Avatar };
