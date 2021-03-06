import userEvent from '@testing-library/user-event';

describe('User events', () => {
  it('should add click handler', () => {
    const spyCallback = jest.fn();
    const btn = <button type="button" onClick={spyCallback}>click</button>;
    // @ts-ignore
    userEvent.click(btn);

    expect(spyCallback).toHaveBeenCalledTimes(1);
  });

  it('should add double click handler', () => {
    const spyCallback = jest.fn();
    // @ts-ignore
    const btn = <button type="button" onDBlClick={spyCallback}>click</button>;
    // @ts-ignore
    userEvent.dblClick(btn);

    expect(spyCallback).toHaveBeenCalledTimes(1);
  });
});
