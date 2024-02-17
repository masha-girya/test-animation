import { useRef, useState } from 'react';
import { ShowReelIcon } from 'components';
import styles from './ShowReel.module.scss';

export const ShowReel = () => {
  const parentRef = useRef<any | null>(null);

  const [rotation, setRotation] = useState(0);
  const [intervalAmount, setIntervalAmount] = useState<NodeJS.Timer | null>(
    null,
  );

  const handleMouseOver = () => {
    if (parentRef.current && !intervalAmount) {
      const interval = setInterval(() => setRotation((prev) => prev + 1), 10);
      setIntervalAmount(interval);
    }
  };

  const handleMouseLeave = () => {
    if (intervalAmount) {
      clearInterval(intervalAmount);
      setIntervalAmount(null);
    }
  };

  return (
    <div
      className={styles.showReel}
      ref={parentRef}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div className={styles.showReel__dot}></div>
      <ShowReelIcon className={styles.showReel__text} />
    </div>
  );
};
