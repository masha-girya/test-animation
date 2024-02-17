import { RunningStroke, Title, CircleBox } from '../../components';
import { TITLE } from '../../constants';
import styles from './Home.module.scss';

export const Home = () => {
  return (
    <main className={styles.main}>
      <CircleBox />
      <Title text={TITLE} />
      <RunningStroke />
    </main>
  );
};
