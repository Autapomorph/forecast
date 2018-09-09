import EmptyResult from '.';

describe('EmptyResult tests', () => {
  it('renders properly', () => {
    const wrapper = shallow(<EmptyResult />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render Message with text', () => {
    const wrapper = shallow(<EmptyResult />);

    expect(wrapper.find('Message')).toHaveLength(1);
    expect(wrapper.find('h2').text()).toEqual('Города не найдены!');
  });
});
