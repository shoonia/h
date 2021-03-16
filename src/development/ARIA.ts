import { AriaAttributes } from '../..';
import T from './t';

export const ARIA: AriaAttributes = {
  'aria-activedescendant': T.string,
  'aria-atomic': T.booleanish,
  'aria-autocomplete': T.oneOf([
    'none',
    'inline',
    'list',
    'both',
  ]),
  'aria-busy': T.booleanish,
  'aria-checked': T.oneOfType([
    T.booleanish,
    T.oneOf(['mixed']),
  ]),
  'aria-colcount': T.number,
  'aria-colindex': T.number,
  'aria-colspan': T.number,
  'aria-controls': T.string,
  'aria-current': T.oneOfType([
    T.booleanish,
    T.oneOf([
      'page',
      'step',
      'location',
      'date',
      'time'
    ]),
  ]),
  'aria-describedby': T.string,
  'aria-details': T.string,
  'aria-disabled': T.booleanish,
  'aria-dropeffect': T.oneOf([
    'none',
    'copy',
    'execute',
    'link',
    'move',
    'popup'
  ]),
  'aria-errormessage': T.string,
  'aria-expanded': T.booleanish,
  'aria-flowto': T.string,
  'aria-grabbed': T.booleanish,
  'aria-haspopup': T.oneOfType([
    T.booleanish,
    T.oneOf([
      'menu',
      'listbox',
      'tree',
      'grid',
      'dialog'
    ]),
  ]),
  'aria-hidden': T.booleanish,
  'aria-invalid': T.oneOfType([
    T.booleanish,
    T.oneOf([
      'grammar',
      'spelling',
    ]),
  ]),
  'aria-keyshortcuts': T.string,
  'aria-label': T.string,
  'aria-labelledby': T.string,
  'aria-level': T.number,
  'aria-live': T.oneOf([
    'off',
    'assertive',
    'polite',
  ]),
  'aria-modal': T.booleanish,
  'aria-multiline': T.booleanish,
  'aria-multiselectable': T.booleanish,
  'aria-orientation': T.oneOf([
    'horizontal',
    'vertical',
  ]),
  'aria-owns': T.string,
  'aria-placeholder': T.string,
  'aria-posinset': T.number,
  'aria-pressed': T.oneOfType([
    T.booleanish,
    T.oneOf(['mixed']),
  ]),
  'aria-readonly': T.booleanish,
  'aria-relevant': T.oneOf([
    'additions',
    'additions removals',
    'additions text',
    'all',
    'removals',
    'removals additions',
    'removals text',
    'text',
    'text additions',
    'text removals',
  ]),
  'aria-required': T.booleanish,
  'aria-roledescription': T.string,
  'aria-rowcount': T.number,
  'aria-rowindex': T.number,
  'aria-rowspan': T.number,
  'aria-selected': T.booleanish,
  'aria-setsize': T.number,
  'aria-sort': T.oneOf([
    'none',
    'ascending',
    'descending',
    'other',
  ]),
  'aria-valuemax': T.number,
  'aria-valuemin': T.number,
  'aria-valuenow': T.number,
  'aria-valuetext': T.string,
};