import classNames from 'classnames';
import { ALT_TEXT } from 'app-constants';
import styles from './BurgerMenu.module.scss';

interface IProps {
  handleClickMenu: () => void;
  isOpen: boolean;
}

export const BurgerMenu = (props: IProps) => {
  const { handleClickMenu, isOpen } = props;

  return (
    <button
      type="button"
      aria-label={ALT_TEXT.buttonBurger}
      className={styles.burger}
      onClick={handleClickMenu}
    >
      <div
        className={classNames(styles.burger__icon, {
          [styles.burger__icon_open]: isOpen,
        })}
      ></div>
      <div
        className={classNames(styles.burger__icon, {
          [styles.burger__icon_open]: isOpen,
        })}
      ></div>
    </button>
  );
};
