import React from 'react';
import { shallow } from 'enzyme';

import DummyComponent from './DummyComponent';

describe('dummy test', () => {
  it('should generate a simple snapshot', () => {
    shallow(<DummyComponent />);
  });
});
