import {bem} from '../../shared/bem';

import styles from './Flex.module.scss';

export type FlexDir = 'row' | 'col' | 'reverse-row' | 'reverse-col';

export type FlexJustify = 'start' | 'center' | 'end' | 'between';

export type FlexAlign = 'start' | 'center' | 'end' | 'stretch';

export type FlexSelf = 'start' | 'center' | 'end' | 'stretch';

export type FlexGrow = 's' | 'm' | 'l' | 'no';

export type FlexShrink = 's' | 'no' | 'unset';

export type FlexWrap = 'wrap' | 'no';

export type FlexBase = '0' | '25' | '33' | '50' | '66' | '75' | '100' | 'no';

export type FlexGap = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'no';

export type FlexBem = {
  dir?: FlexDir;
  justify?: FlexJustify;
  align?: FlexAlign;
  self?: FlexSelf;
  grow?: FlexGrow;
  shrink?: FlexShrink;
  wrap?: FlexWrap;
  base?: FlexBase;
  gap?: FlexGap;
};

const b = bem.object('Flex', styles);

export const flexB = ({dir, justify, align, self, grow, shrink, wrap, base, gap}: FlexBem) => {
  return b('', {
    [`dir-${dir}`]: !!dir,
    [`justify-${justify}`]: !!justify,
    [`align-${align}`]: !!align,
    [`self-${self}`]: !!self,
    [`grow-${grow}`]: !!grow,
    [`shrink-${shrink}`]: !!shrink,
    [`wrap-${wrap}`]: !!wrap,
    [`base-${base}`]: !!base,
    [`gap-${gap}`]: !!gap,
  });
};
