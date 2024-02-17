import { useCallback, useEffect, useRef, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import classNames from 'classnames';
import { Home, WhatWhoWhere } from '../../screens';
import { ROUTES, SIDE_LINK_MOCK } from '../../constants';
import styles from './Routers.module.scss';

export const Routers = () => {
  const location = useLocation();
  const displayLocation = useRef(location);

  const [transitionStage, setTransitionStage] = useState('fadeIn');

  const handleAnimationEnd = useCallback(() => {
    if (transitionStage === 'fadeOut') {
      setTransitionStage('fadeIn');
      displayLocation.current = location;
    }
  }, [transitionStage]);

  useEffect(() => {
    if (location !== displayLocation.current) setTransitionStage('fadeOut');
  }, [location, displayLocation]);

  return (
    <div
      className={classNames(styles.routers, styles[`routers_${transitionStage}`])}
      onAnimationEnd={handleAnimationEnd}
    >
      <Routes location={displayLocation.current}>
        <Route path={ROUTES.home.link} element={<Home />} />

        {SIDE_LINK_MOCK.map((link) => (
          <Route
            key={link.title}
            path={link.link}
            element={<WhatWhoWhere text={`${link.title}?`} />}
          />
        ))}
      </Routes>
    </div>
  );
};
