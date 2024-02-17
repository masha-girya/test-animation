import { Link, useLocation } from 'react-router-dom';
import { BurgerMenu, Language, LogoIcon, SideLinks } from 'components';
import { ROUTES } from 'app-constants';
import styles from './Header.module.scss';
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { Transition } from 'react-transition-group';

export const Header = () => {
  const ref = useRef<null | any>(null);
  const [isMenuOnShow, setIsMenuOnShow] = useState(false);
  const { pathname } = useLocation();

  const handleClickMenu = () => {
    setIsMenuOnShow(!isMenuOnShow);
  };

  const DEFAULT_STYLES = {
    transition: `opacity ${300}ms ease-in-out`,
    opacity: 0,
    zIndex: 0,
  };

  const TRANSITION_STYLE: any = {
    entering: { opacity: 1, zIndex: 2 },
    entered: { opacity: 1, zIndex: 2 },
    exiting: { opacity: 0, zIndex: 0 },
    exited: { opacity: 0, zIndex: 0 },
  };

  useEffect(() => {
    setIsMenuOnShow(false);
  }, [pathname]);

  return (
    <>
      <header
        className={classNames(styles.header, {
          [styles.header_open]: isMenuOnShow,
        })}
      >
        <div className={styles.header__box}>
          <div className={styles.header__lang}>
            <Language />
          </div>

          <Link to={ROUTES.home.link}>
            <LogoIcon className={styles.header__logo} />
          </Link>

          <BurgerMenu handleClickMenu={handleClickMenu} isOpen={isMenuOnShow} />
        </div>
      </header>

      <Transition in={isMenuOnShow} timeout={300} ref={ref}>
        {(state) => (
          <div
            ref={ref}
            style={{ ...DEFAULT_STYLES, ...TRANSITION_STYLE[state] }}
            className={styles.mobNav}
          >
            <SideLinks isMobNav />
          </div>
        )}
      </Transition>
    </>
  );
};
