import styles from './HeaderTable.module.css';
import { HeaderTableProps } from '../../interfaces/interface';

export function HeaderTable(props: HeaderTableProps) {
  return (
    <div className={styles.tableHeader}>
      <div className={styles.tableHeaderCenter}>
        <h1>{props.title}</h1>
      </div>
    </div>
  );
}
