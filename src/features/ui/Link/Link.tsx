import React, {FC, ReactNode} from 'react';
import NextLink from 'next/link';

import {cn} from '../../shared/cn';
import {bem} from '../../shared/bem';

import styles from './Link.module.scss';

export type LinkProps = {
  href: string;
  size?: 's' | 'm' | 'l';
  className?: string;
  children?: ReactNode;
};

const b = bem.object('Main', styles);

export const Link: FC<LinkProps> = ({href, size, className, children}) => {
  return (
    <NextLink
      href={href}
      className={cn(
        b('', {
          [`size-${size}`]: !!size,
        }),
        className,
      )}
    >
      {children}
    </NextLink>
  );
};
