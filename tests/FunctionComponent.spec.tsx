describe('FunctionComponent', () => {
  it('should support function component', () => {
    const Input = () => (
      <input type="text" />
    );

    expect(<Input />).toHaveOuterHTML('<input type="text">');
  });

  it('should render children nodes as text', () => {
    const Text = ({ children }) => (
      <p>{children}</p>
    );

    expect(<Text>hello</Text>).toHaveOuterHTML('<p>hello</p>');
  });

  it('should render children nodes', () => {
    const Text = ({ children }) => (
      <p>{children}</p>
    );

    expect(
      <Text>
        <b>message</b>
      </Text>
    ).toHaveOuterHTML('<p><b>message</b></p>');
  });

  it('should support children node and props', () => {
    const Text = ({ id, children }) => (
      <p id={id}>{children}</p>
    );

    expect(<Text id="x">text</Text>).toHaveOuterHTML('<p id="x">text</p>');
  });
});
