import Error from '.';

describe('Error tests', () => {
  it('renders properly', () => {
    const wrapper = shallow(<Error />);

    expect(wrapper).toMatchSnapshot();
  });

  it('should render without children', () => {
    const wrapper = shallow(<Error />);

    expect(wrapper.children()).toHaveLength(0);
  });

  it('should render single child', () => {
    const child = <div>child</div>;
    const wrapper = shallow(<Error>{child}</Error>);

    expect(wrapper.children()).toEqual(shallow(child));
  });

  it('should render children', () => {
    const { Fragment } = React;

    const children = (
      <Fragment>
        <div>child</div>
        <div>another child</div>
      </Fragment>
    );
    const wrapper = shallow(<Error>{children}</Error>);

    expect(wrapper.children()).toHaveLength(2);
  });
});
