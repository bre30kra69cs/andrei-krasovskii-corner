import {Nil} from '../Nil';
import {guard} from '../guard';
import {throwup} from '../throwup';

export type Invariant = {
  falsy(value: unknown, message?: string): asserts value;
  truly(value: unknown, message?: string): asserts value;
  nil<T>(value: Nil<T>, message?: string): asserts value is T;
};

export const invariant: Invariant = {
  falsy: (value: unknown, message = 'Invariant'): asserts value => {
    if (!value) {
      throwup(message);
    }
  },
  truly: (value: unknown, message = 'Invariant'): asserts value => {
    if (value) {
      throwup(message);
    }
  },
  nil: <T>(value: Nil<T>, message = 'Invariant'): asserts value is T => {
    if (guard.nil(value)) {
      throwup(message);
    }
  },
};
