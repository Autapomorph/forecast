import { shallow } from 'enzyme';

import Message from '.';

import { StyledMessageContent } from './styles';

describe('Message tests', () => {
  it('renders properly', () => {
    const wrapper = shallow(<Message />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render children', () => {
    const text = 'text';
    const wrapper = shallow(<Message>{text}</Message>);

    expect(wrapper.find(StyledMessageContent).text()).toEqual(text);
  });
});
