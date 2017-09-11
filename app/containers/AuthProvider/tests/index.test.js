import React from 'react';
import { shallow } from 'enzyme';

import { AuthProvider } from '../index';

const TestChild = () => (
  <div className="testChild"></div>
);


describe('<AuthProvider />', () => {
  it('render with child', () => {
    const AuthProviderElem = shallow(<AuthProvider dispatch={() => { }} user={'kekProp'} > <TestChild menuIsOpen={'number'} /> </AuthProvider>);

    expect(AuthProviderElem.find(TestChild).first().props().user).toEqual('kekProp');
    expect(AuthProviderElem.find(TestChild).first().props().menuIsOpen).toEqual('number');
  });
});
