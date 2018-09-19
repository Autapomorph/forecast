import Loader from '.';

describe('Loader tests', () => {
  it('renders properly', () => {
    const wrapper = shallow(<Loader />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render default text', () => {
    const wrapper = shallow(<Loader />);

    expect(wrapper.find('h2').text()).toEqual(Loader.defaultProps.text);
  });

  it('should render defined text', () => {
    const text = 'text';
    const wrapper = shallow(<Loader text={text} />);

    expect(wrapper.find('h2').text()).toEqual(text);
  });
});
