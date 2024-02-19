export const ANIMATION_DURATION_LANG = 400;

export const ANIMATION_DELAY = ANIMATION_DURATION_LANG / 1.5;

export const DEFAULT_STYLES_LANG = {
  transition: `opacity ${ANIMATION_DURATION_LANG}ms ease-in-out, border-color .3s ease, z-index .3s ease`,
  opacity: 0,
  position: 'relative',
  zIndex: 3,
};

export const TRANSITION_STYLE_LANG: any = {
  entering: { opacity: 1, zIndex: 3 },
  entered: { opacity: 1, zIndex: 3 },
  exiting: { opacity: 0, zIndex: -1 },
  exited: { opacity: 0, zIndex: -1 },
};

export const LANGS = ['UA', 'RU'] as const;
