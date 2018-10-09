// @flow
import styled from 'styled-components';
import { fontSize, color, spacing } from '../theme';

let sizes = {
  h1: 'xxl',
  h2: 'xl',
  h3: 'lg',
  h4: 'md',
  h5: 'sm'
};

let Heading = styled.h1`
  color: ${color('darkgrey')};
  margin: 0;
  font-weight: bold;
  font-size: ${props => fontSize(sizes[props.as] || 'xxl')};
  line-height: calc(${props => fontSize(sizes[props.as] || 'xxl')} * 1.2);
  margin: ${spacing('sm')} 0;
`;

let Title = styled.h1`
  font-weight: bold;
  color: ${color('darkgrey')};
  margin: 0;
  font-size: ${fontSize('xl')};
  line-height: calc(${fontSize('xl')} * 1.2);
  margin: ${spacing('sm')} 0;
`;

let Subtitle = styled.h3`
  margin: 0;
  color: ${color('grey')};
  font-size: ${fontSize('lg')};
  line-height: calc(${fontSize('lg')} * 1.2);
`;

let Normal = styled.div`
  color: ${color('darkgrey')};
  margin: 0;
  font-size: ${fontSize('md')};
  line-height: calc(${fontSize('md')} * 1.2);
`;

let Paragraph = styled.p`
  color: ${color('darkgrey')};
  font-size: ${fontSize('md')};
  line-height: calc(${fontSize('md')} * 1.2);
`;

export { Heading, Title, Subtitle, Normal, Paragraph };
