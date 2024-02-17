import classNames from 'classnames';
import styles from './BurgerMenu.module.scss';

interface IProps {
  handleClickMenu: () => void;
  isOpen: boolean;
}

export const BurgerMenu = ({ handleClickMenu, isOpen }: IProps) => {
  return (
    <button
      type="button"
      aria-label="Open Menu"
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
