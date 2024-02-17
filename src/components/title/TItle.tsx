import { useCallback, useRef } from 'react';
import styles from './Title.module.scss';
import classNames from 'classnames';

interface IProps {
  text: string;
  addStyle?: string;
}

export const Title = ({ text, addStyle }: IProps) => {
  const parentRelativeRef = useRef<any | null>(null);

  const handleMouseMove = (e: any) => {
    if (parentRelativeRef.current) {
      const cardRect = parentRelativeRef.current.getBoundingClientRect();

      const { clientX, clientY } = e;
      const moveCoef = 0.2;

      const moveX = (clientX - cardRect.width / 1.5) * moveCoef;
      const moveY = (clientY - cardRect.height * 2) * moveCoef;

      parentRelativeRef.current.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
    }
  };

  const handleMouseLeave = useCallback(() => {
    parentRelativeRef.current.style.transform = `translate3d(0px, 0px, 0)`;
  }, []);

  return (
    <div
      className={classNames(styles.titleBlock, addStyle)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <h1 ref={parentRelativeRef} className={styles.titleBlock__title}>
        {text}
      </h1>
    </div>
  );
};
