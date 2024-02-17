import classNames from 'classnames';
import styles from './Marquee.module.scss';

interface IProps {
  text: string;
  isUpsideDown?: boolean;
}

export const Marquee = (props: IProps) => {
  const { text, isUpsideDown } = props;

  return (
    <div
      className={classNames(styles.marqueeWrapper, {
        [styles.marqueeWrapper_upsideDown]: isUpsideDown,
      })}
    >
      {Array(2)
        .fill(0)
        .map((_, index) => (
          <div
            key={index}
            className={classNames(
              styles.marqueeWrapper__marquee,
              styles[`marqueeWrapper__marquee_${index + 1}`],
            )}
          >
            <span>{text}&nbsp;&nbsp;&nbsp;</span>
          </div>
        ))}
    </div>
  );
};
