import {Nil} from '../Nil';
import {Rec} from '../Rec';

export const guard = {
  string: {
    any: (value: Nil<unknown>): value is string => {
      return typeof value === 'string';
    },
    empty: (value: Nil<unknown>): value is string => {
      return guard.string.any(value) && value === '';
    },
    filled: (value: Nil<unknown>): value is string => {
      return guard.string.any(value) && value !== '';
    },
    trim: {
      empty: (value: Nil<unknown>): value is string => {
        return guard.string.any(value) && value.trim() === '';
      },
      filled: (value: Nil<unknown>): value is string => {
        return guard.string.any(value) && value.trim() !== '';
      },
    },
  },
  number: {
    any: (value: Nil<unknown>): value is number => {
      return typeof value === 'number';
    },
    safe: (value: Nil<unknown>): value is number => {
      return guard.number.any(value) && !isNaN(value) && isFinite(value);
    },
    positive: (value: Nil<unknown>): value is number => {
      return guard.number.safe(value) && value >= 0;
    },
    negative: (value: Nil<unknown>): value is number => {
      return guard.number.safe(value) && value < 0;
    },
    whole: (value: Nil<unknown>): value is number => {
      return guard.number.safe(value) && value === Math.floor(value);
    },
    natural: {
      quantity: (value: Nil<unknown>): value is number => {
        return guard.number.positive(value) && value === Math.floor(value);
      },
      order: (value: Nil<unknown>): value is number => {
        return guard.number.natural.quantity(value) && value !== 0;
      },
    },
    not: {
      safe: (value: Nil<unknown>): value is number => {
        return !guard.number.safe(value);
      },
      positive: (value: Nil<unknown>): value is number => {
        return !guard.number.positive(value);
      },
      negative: (value: Nil<unknown>): value is number => {
        return !guard.number.negative(value);
      },
    },
  },
  null: (value: Nil<unknown>): value is null => {
    return value === null;
  },
  undefined: (value: Nil<unknown>): value is undefined => {
    return value === undefined;
  },
  void: (value: Nil<unknown>): value is void => {
    return guard.undefined(value);
  },
  nil: (value: Nil<unknown>): value is undefined | null => {
    return guard.null(value) || guard.undefined(value);
  },
  array: <T = unknown>(value: Nil<unknown>): value is T[] => {
    return Array.isArray(value);
  },
  function: <T extends (...args: any[]) => any>(value: Nil<unknown>): value is T => {
    return typeof value === 'function';
  },
  record: <T extends Rec = Rec>(value: Nil<unknown>): value is T => {
    return typeof value === 'object' && !guard.array(value);
  },
  boolean: {
    any: (value: Nil<unknown>): value is boolean => {
      return typeof value === 'boolean';
    },
    false: (value: Nil<unknown>): value is false => {
      return guard.boolean.any(value) && value === false;
    },
    true: (value: Nil<unknown>): value is true => {
      return guard.boolean.any(value) && value === true;
    },
  },
  not: {
    null: <T>(value: Nil<T>): value is T | undefined => {
      return !guard.null(value);
    },
    undefined: <T>(value: Nil<T>): value is T | null => {
      return !guard.undefined(value);
    },
    nil: <T>(value: Nil<T>): value is T => {
      return !guard.nil(value);
    },
  },
};
