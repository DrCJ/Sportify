import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import PlayerFilterForm from '../../client/src/player/PlayerFilterForm';

// Testing for props available in PlayerFilterForm
describe('PlayerFilterFormProps', () => {
  let component;

  beforeEach(() => {
    component = shallow(React.createElement(PlayerFilterForm));
  });

  it('has a form key with the value PlayerView', () => {
    expect(component.node.props.form).to.equal('PlayerView');
  });

  it('has a field keys in props with the correct values', () => {
    expect(component.node.props.fields).to.have.length(3);
    expect(component.node.props.fields[0]).to.equal('team');
    expect(component.node.props.fields[1]).to.equal('position');
    expect(component.node.props.fields[2]).to.equal('weekly');
  });
});
