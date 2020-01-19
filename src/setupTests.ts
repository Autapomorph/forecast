import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

interface Global extends NodeJS.Global {
  React: typeof React;
  shallow: typeof shallow;
  mount: typeof mount;
  render: typeof render;
}

declare let global: Global;
global.React = React;
global.shallow = shallow;
global.mount = mount;
global.render = render;

Enzyme.configure({ adapter: new Adapter() });
