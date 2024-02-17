import { Title } from '../../components';
import styles from './WhatWhoWhere.module.scss';

interface IProps {
  text: string;
}

export const WhatWhoWhere = ({ text }: IProps) => {
  return (
    <main className={styles.main}>
      <Title text={text} addStyle={styles.textWrapper} />
    </main>
  );
};
