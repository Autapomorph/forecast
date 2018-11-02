import Loader from '.';
import Message from '../Message';

describe('Loader tests', () => {
  it('renders properly', () => {
    const wrapper = shallow(<Loader />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render defined content', () => {
    const text = 'text';
    const wrapper = mount(<Loader>{text}</Loader>);

    expect(wrapper.find(Message).text()).toEqual(text);
  });
});
