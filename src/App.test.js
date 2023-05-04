import React from 'react';
import ReactDOM from 'react-dom';
import {mount} from 'enzyme';
import App from './App';

let container;

beforeEach(() => {
  container = document.createElement('div');
});

afterEach(() => {
  ReactDOM.unmountComponentAtNode(container);
});

it('renders without crashing', () => {
  mount(<App />, container);
});
