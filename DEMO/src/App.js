import { createRef } from 'jsx-dom-runtime';

import * as s from './styles.module.css';

export const App = () => {
  const Input = createRef();
  const List = createRef();

  const removeItem = ({ target }) => {
    target.closest('[data-item]').remove();
  };

  const addItem = () => {
    const field = Input.current;

    if (field.value === '') {
      return;
    }

    <List.current>
      <li data-item className={s.item}>
        {field.value}
        <button type="button" className={s.btn} onClick={removeItem}>
          Remove
        </button>
      </li>
    </List.current>;

    field.value = '';
  };

  const pressEnter = (event) => {
    if (event.key === 'Enter') {
      addItem();
    }
  };

  return (
    <>
      <fieldset style="border: 0; padding: 0;">
        <div className={s.toolbar}>
          <input ref={Input} type="text" className={s.field} onKeyPress={pressEnter} />
          <button type="button" className={s.btn} onClick={addItem}>
            Add Item
          </button>
        </div>
      </fieldset>
      <ul ref={List} className={s.list} />
    </>
  );
};
