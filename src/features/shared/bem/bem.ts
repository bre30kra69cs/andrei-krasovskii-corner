import {Rec} from '../Rec';
import {Nil} from '../Nil';
import {guard} from '../guard';
import {invariant} from '../invariant';

export type BemMods = Rec<Nil<boolean>>;

export const formatBlock = (root: string, block: string) => {
  return `${root}--${block}`;
};

export const formatMod = (root: string, mod: string) => {
  return `${root}__${mod}`;
};

const parseKeys = (root: string, outerBlock = '', mods?: BemMods) => {
  const innerBlock = outerBlock.trim() ? formatBlock(root, outerBlock) : root;
  const result = [innerBlock];

  if (mods && Object.keys(mods).length) {
    for (const key in mods) {
      const value = mods[key];

      if (value) {
        result.push(formatMod(innerBlock, key));
      }
    }
  }

  return result;
};

export const bem = {
  string: (root: string) => {
    invariant.falsy(guard.string.filled(root.trim()), 'root is empty string');

    return (block = '', mods?: BemMods) => {
      const keys = parseKeys(root, block, mods);
      return keys.join(' ');
    };
  },
  object: (root: string, mapper: Rec<string>) => {
    invariant.falsy(guard.string.filled(root.trim()), 'crootn is empty string');

    return (block = '', mods?: BemMods) => {
      const keys = parseKeys(root, block, mods);

      return keys
        .map((key) => mapper[key])
        .filter(guard.not.nil)
        .join(' ');
    };
  },
};
