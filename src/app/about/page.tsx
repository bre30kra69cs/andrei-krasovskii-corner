import {bem} from '../../features/shared/bem';
import {Text} from '../../features/ui/Text';

import styles from './page.module.scss';

const b = bem.object('Main', styles);

export default function Page() {
  return (
    <Text as="h1" size="xxl" weight="700" className={b('title')}>
      Andrei Krasovskii
    </Text>
  );
}
