import {guard} from '../guard';

export const throwup = (value?: unknown) => {
  if (guard.string.any(value)) {
    throw new Error(value);
  }

  throw value;
};
