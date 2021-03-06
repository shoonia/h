describe('Style attribute', () => {
  it('should add style as a string', () => {
    // @ts-ignore
    expect(<div style="color: red; padding: 10px;" />).toHaveAttribute(
      'style',
      'color: red; padding: 10px;',
    );
  });

  it('should add style as an object', () => {
    expect(<div style={{
      color: 'black',
      border: '1px solid white',
    }} />).toHaveAttribute(
      'style',
      'color: black; border: 1px solid white;',
    );
  });
});
