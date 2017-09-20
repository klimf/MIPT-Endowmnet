import React from 'react';
import { shallow } from 'enzyme';

import Input from '../index';

describe('<Input />', () => {
  it('Expect to have unit tests specified', () => {
    const elem = shallow(<Input />);
    expect(elem.isEmptyRender()).toEqual(false);
  });
});
