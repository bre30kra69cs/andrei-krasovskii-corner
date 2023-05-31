import {bem} from '../features/shared/bem';
import {Flex} from '../features/ui/Flex';

import styles from './page.module.scss';

const b = bem.object('Main', styles);

export default function Page() {
  return <Flex align="stretch" className={b()}></Flex>;
}
