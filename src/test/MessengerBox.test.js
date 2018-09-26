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
import MessengerBox from '../components/MessengerBox';

configure({
  adapter: new Adapter(),
});

describe('<MessengerBox />', () => {
  it('should render <MessengerBox /> component window', () => {
    const chatWindow = shallow(<MessengerBox />);
    expect(chatWindow.find('div')).to.have.length(1);
    expect(chatWindow.find('div').text()).to.be.a('string');
    expect(chatWindow.find('div').text()).to.equal('Loading message...');
  });
});
