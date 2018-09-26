import React from 'react';
import {
  configure,
  shallow,
  mount,
  render,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {
  expect,
} from 'chai';
import MessageSubmitter from '../components/MessageSubmitter';

configure({
  adapter: new Adapter(),
});

describe('<MessageSubmitter />', () => {
  it('should render <MessageSubmitter /> component form section', () => {
    const SendMessage = shallow(<MessageSubmitter />);
    expect(SendMessage.find('form')).to.have.length(1);
    expect(SendMessage.find('#message')).to.have.length(1);
    expect(SendMessage.find('#message').type()).to.equal('input');
  });
});
