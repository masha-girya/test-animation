import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { SIDE_LINK_MOCK } from 'app-constants';
import styles from './SideLinks.module.scss';

interface IProps {
  isMobNav?: boolean;
}

export const SideLinks = ({ isMobNav }: IProps) => {
  return (
    <nav>
      {SIDE_LINK_MOCK.map((link) => (
        <aside
          key={link.title}
          className={classNames(
            styles.sideLinks,
            styles[`sideLinks_${link.title}`],
            {
              [styles.sideLinks_mobNav]: isMobNav,
              [styles[`sideLinks_mobNav_${link.title}`]]: isMobNav,
            },
          )}
        >
          <Link to={link.link} className={styles.sideLinks__link}>
            {`${link.title}?`}
          </Link>
        </aside>
      ))}
    </nav>
  );
};
