import { Link } from 'react-router-dom';
import { Language, LogoIcon, MobNav } from 'components';
import { IDS, ROUTES } from 'app-constants';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <>
      <header id={IDS.header} className={styles.header}>
        <div className={styles.header__box}>
          <div className={styles.header__lang}>
            <Language />
          </div>

          <Link to={ROUTES.home.link}>
            <LogoIcon className={styles.header__logo} />
          </Link>

          <MobNav />
        </div>
      </header>
    </>
  );
};
