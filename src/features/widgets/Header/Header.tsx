import React, {FC} from 'react';

import {Flex} from '../../ui/Flex';
import {Link} from '../../ui/Link';
import {Text} from '../../ui/Text';
import {cn} from '../../shared/cn';
import {bem} from '../../shared/bem';

import styles from './Header.module.scss';

export type HeaderProps = {
  className?: string;
};

const b = bem.object('Main', styles);

export const Header: FC<HeaderProps> = ({className}) => {
  return (
    <Flex as="header" dir="row" gap="m" align="center" className={cn(b(), className)}>
      <Link href="/">Home</Link>
      <Link href="/about">About Me</Link>
      <Text size="l" weight="300" className={b('title')}>
        Andrei Krasovskii Corner
      </Text>
    </Flex>
  );
};
