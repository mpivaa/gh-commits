import { get } from 'lodash';

let theme = {
  spacing: {
    xxs: '4px',
    xs: '6px',
    sm: '10px',
    md: '14px',
    lg: '18px',
    xl: '32px',
    xxl: '56px'
  },
  colors: {
    darkgrey: '#444',
    grey: '#999',
    lightgrey: '#eee',
    snow: '#f9f9f9'
  },
  fontSize: {
    xs: '0.8rem',
    sm: '0.9rem',
    md: '1rem',
    lg: '1.2rem',
    xl: '1.8rem',
    xxl: '3rem'
  },
  radius: '10px'
};

let spacing = size => props => get(props, ['theme', 'spacing', size]);
let fontSize = size => props => get(props, ['theme', 'fontSize', size]);
let color = color => props => get(props, ['theme', 'colors', color]);
let radius = props => get(props, ['theme', 'radius']);

export { theme, spacing, fontSize, color, radius };
