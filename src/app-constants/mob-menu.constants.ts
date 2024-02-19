export const DURATION_MOB_MENU = 300;

export const DEFAULT_STYLES_MOB_MENU = {
  transition: `opacity ${DURATION_MOB_MENU}ms ease-in-out`,
  opacity: 0,
  zIndex: -1,
};

export const TRANSITION_STYLE_MOB_MENU: any = {
  entering: { opacity: 1, zIndex: 3 },
  entered: { opacity: 1, zIndex: 3 },
  exiting: { opacity: 0, zIndex: 3 },
  exited: { opacity: 0, zIndex: -1 },
};
