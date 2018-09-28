import react from 'react';
import { shallow } from 'enzyme';

import { DummyComponent } from './App';

describe('dummy test', () => {
  it('should generate a simple snapshot', () => {
    const Wrapper = shallow(<DummyComponent />);
  });
});
