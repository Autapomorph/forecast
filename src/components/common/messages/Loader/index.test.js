import Loader from '.';
import Message from '../Message';

describe('Loader tests', () => {
  it('renders properly', () => {
    const wrapper = shallow(<Loader />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render default text', () => {
    const wrapper = mount(<Loader />);

    expect(wrapper.find(Message).text()).toEqual(Loader.defaultProps.children);
  });

  it('should render defined text', () => {
    const text = 'text';
    const wrapper = mount(<Loader>{text}</Loader>);

    expect(wrapper.find(Message).text()).toEqual(text);
  });
});
