import {Ulx} from '../Undefinable';
import {Nlx} from '../Nullable';

export type Nil<T = unknown> = Nlx<Ulx<T>>;

export type NotNil<T> = T extends null | undefined ? never : T;
