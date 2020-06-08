  import React from 'react';
  import { render } from 'react-dom';
  import Logo from './Logo';
  import Corpo from './corpo';
  import Section from './Section';

  render(<Logo /> , document.getElementById('app'));
  render(<Corpo />, document.getElementById('corpo'));
  render(<Section />, document.getElementById('separa'));