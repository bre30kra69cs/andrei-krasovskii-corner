import {ReactNode} from 'react';

import {Flex} from '../features/ui/Flex';
import {Header} from '../features/widgets/Header';

import '../features/styles/normalize.scss';
import '../features/styles/global.scss';

type LayoutProps = {
  children?: ReactNode;
};

export const metadata = {
  title: 'Andrei Krasovskii Corner',
  description: 'Andrei Krasovskii Blog',
};

export default function Layout({children}: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Flex as="main" align="center">
          {children}
        </Flex>
      </body>
    </html>
  );
}
