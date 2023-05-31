import {createElement, ReactNode} from 'react';

import {cn} from '../../shared/cn';
import {bem} from '../../shared/bem';

import styles from './Text.module.scss';

export type TextProps = {
  as?: 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl';
  color?: 'main' | 'opposite';
  weight?: '300' | '400' | '500' | '700';
  className?: string;
  children?: ReactNode;
};

const b = bem.object('Main', styles);

export const Text = ({as = 'span', size, color, weight, className, children}: TextProps) => {
  return createElement(
    as,
    {
      className: cn(
        b('', {
          [`size-${size}`]: !!size,
          [`color-${color}`]: !!color,
          [`weight-${weight}`]: !!weight,
        }),
        className,
      ),
    },
    children,
  );
};
