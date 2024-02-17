import { useState, useRef, useCallback } from 'react';
import classNames from 'classnames';
import { Transition } from 'react-transition-group';
import {
  LANGS,
  ANIMATION_DELAY,
  ANIMATION_DURATION,
  TRANSITION_STYLE,
  DEFAULT_STYLES,
  LANG_IMAGE_ALT,
} from '../../constants';
import LanguageImage from './assets/LanguageImage.png';
import styles from './Language.module.scss';

export const Language = () => {
  const [isLangOnShow, setIsLangOnShow] = useState(false);
  const nodeRef = useRef<any | null>(null);

  const handleMouseOver = useCallback(() => {
    setIsLangOnShow(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setIsLangOnShow(false);
  }, []);

  return (
    <div
      className={classNames(styles.lang, {
        [styles.lang_hover]: isLangOnShow,
      })}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src={LanguageImage}
        className={classNames(styles.lang__openIcon, {
          [styles.lang__openIcon_hover]: isLangOnShow,
        })}
        alt={LANG_IMAGE_ALT}
      />
      <ul className={styles.lang__list}>
        {LANGS.map((lang, index) => (
          <Transition
            key={lang}
            nodeRef={nodeRef}
            in={isLangOnShow}
            timeout={ANIMATION_DURATION}
          >
            {(state) => (
              <li
                ref={nodeRef}
                className={styles.lang__list__item}
                style={{
                  ...DEFAULT_STYLES,
                  ...TRANSITION_STYLE[state],
                  transitionDelay: isLangOnShow
                    ? `${ANIMATION_DELAY * index}ms`
                    : `-${ANIMATION_DELAY * index}ms`,
                }}
              >
                <button type="button">{lang}</button>
              </li>
            )}
          </Transition>
        ))}
      </ul>
    </div>
  );
};
