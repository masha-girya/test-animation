
export const DURATION_MOB_MENU = 300;

export const DEFAULT_STYLES_MOB_MENU = {
  transition: `opacity ${DURATION_MOB_MENU}ms ease-in-out`,
  opacity: 0,
  zIndex: 0,
};

export const TRANSITION_STYLE_MOB_MENU: any = {
  entering: { opacity: 1, zIndex: 2 },
  entered: { opacity: 1, zIndex: 2 },
  exiting: { opacity: 0, zIndex: 2 },
  exited: { opacity: 0, zIndex: 0 },
};
