import * as React from 'react';
 import { HelloWorld } from './index'
import { storiesOf } from '@storybook/react';


storiesOf('Hello World', module)
  .add('Hello World', () => <HelloWorld />)