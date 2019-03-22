/* eslint-disable import/no-extraneous-dependencies, @typescript-eslint/no-explicit-any */
import React from 'react';
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

(global as any).React = React;
(global as any).shallow = shallow;
(global as any).mount = mount;
(global as any).render = render;
