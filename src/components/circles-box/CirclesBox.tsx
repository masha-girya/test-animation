import { CircleIcon } from '../icons';
import { ShowReel } from '../showreel';
import styles from './CirclesBox.module.scss';

export const CircleBox = () => {
  return (
    <div className={styles.circleBox}>
      <CircleIcon className={styles.circleBox__circle} />
      <div className={styles.circleBox__showReel}>
        <ShowReel />
      </div>
    </div>
  );
};
