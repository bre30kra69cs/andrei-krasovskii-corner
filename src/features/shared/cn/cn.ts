import {Nil} from '../Nil';
import {guard} from '../guard';

export type CnItem = Nil<string | boolean>;

export const cn = (...items: CnItem[]) => {
  return items
    .filter(guard.string.trim.filled)
    .map((item) => item.trim())
    .join(' ');
};
