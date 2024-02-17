import { useEffect, useRef } from 'react';
import { Marquee } from '../../components/marquee';
import { calculateDiagonal, calculateDiagonalAngle } from '../../helpers';
import { MARQUEE } from '../../constants';
import styles from './RunningStroke.module.scss';

export const RunningStroke = () => {
  const boxRef = useRef<any | null>(null);

  useEffect(() => {
    const changeWidth = () => {
      if (boxRef.current) {
        const newWidth = calculateDiagonal(
          window.innerHeight,
          window.innerWidth,
        );
        const newRotation = calculateDiagonalAngle(
          window.innerHeight,
          window.innerWidth,
        );

        boxRef.current.style.width = `${newWidth}px`;
        boxRef.current.style.transform = `rotate(-${newRotation}deg)`;
      }
    };

    changeWidth();

    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);

  return (
    <div className={styles.absoluteContainer} ref={boxRef}>
      <Marquee text={MARQUEE} />
      <Marquee text={MARQUEE} isUpsideDown />
    </div>
  );
};
