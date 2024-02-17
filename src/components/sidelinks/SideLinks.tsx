import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { SIDE_LINK_MOCK } from '../../constants';
import styles from './SideLinks.module.scss';

export const SideLinks = () => {
  return (
    <nav>
      {SIDE_LINK_MOCK.map((link) => (
        <aside
          key={link.title}
          className={classNames(
            styles.sideLinks,
            styles[`sideLinks_${link.title}`],
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
