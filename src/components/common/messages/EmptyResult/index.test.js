import EmptyResult from '.';
import Message from '../Message';

describe('EmptyResult tests', () => {
  it('renders properly', () => {
    const wrapper = shallow(<EmptyResult />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render defined text', () => {
    const text = 'text';
    const wrapper = mount(<EmptyResult>{text}</EmptyResult>);

    expect(wrapper.find(Message).text()).toEqual(text);
  });
});
