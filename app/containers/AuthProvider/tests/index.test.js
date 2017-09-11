import React from 'react';
import { shallow } from 'enzyme';

import { AuthProvider } from '../index';

const TestChild = (props) => (
  <div className="testChild">{ props.kek + props.number || 0 }</div>
)


describe('<AuthProvider />', () => {
  it('render with child', () => {
    const AuthProviderElem = shallow(<AuthProvider dispatch={ () => { } } kek={ "kekProp" } > <TestChild number={'number' }  /> </AuthProvider>);

    expect(AuthProviderElem.find(TestChild).first().props().kek).toEqual("kekProp");
    expect(AuthProviderElem.find(TestChild).first().props().number).toEqual("number");
  });
});
