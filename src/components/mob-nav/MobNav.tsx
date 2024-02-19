import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Transition } from 'react-transition-group';
import { BurgerMenu, SideLinks } from 'components';
import {
  DEFAULT_STYLES_MOB_MENU,
  DURATION_MOB_MENU,
  IDS,
  TRANSITION_STYLE_MOB_MENU,
} from 'app-constants';
import styles from './MobNav.module.scss';

export const MobNav = () => {
  const nodeRef = useRef<null | any>(null);
  const [isMenuOnShow, setIsMenuOnShow] = useState(false);
  const { pathname } = useLocation();

  const handleClickMenu = () => {
    setIsMenuOnShow(!isMenuOnShow);
    const header = document.getElementById(IDS.header);

    if (header) {
      header.style.backgroundColor = isMenuOnShow ? 'transparent' : '#bebebe';
    }
  };

  useEffect(() => {
    setIsMenuOnShow(false);
  }, [pathname]);

  return (
    <>
      <BurgerMenu handleClickMenu={handleClickMenu} isOpen={isMenuOnShow} />

      <Transition in={isMenuOnShow} timeout={DURATION_MOB_MENU} ref={nodeRef}>
        {(state) => (
          <div
            ref={nodeRef}
            style={{
              ...DEFAULT_STYLES_MOB_MENU,
              ...TRANSITION_STYLE_MOB_MENU[state],
            }}
            className={styles.mobNav}
          >
            <SideLinks isMobNav />
          </div>
        )}
      </Transition>
    </>
  );
};
