import { Link } from 'react-router-dom';
import { Language } from '../language';
import { LogoIcon } from '../icons';
import { ROUTES } from '../../constants';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__box}>
        <div className={styles.header__lang}>
          <Language />
        </div>
        <Link to={ROUTES.home.link}>
          <LogoIcon className={styles.header__logo} />
        </Link>
      </div>
    </header>
  );
};
