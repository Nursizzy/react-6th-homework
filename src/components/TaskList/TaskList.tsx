import styles from './TaskList.module.css';
import { ITaskList } from '../../interfaces/interface';

export function TaskList(props: ITaskList) {
  return <div className={styles.taskList}>{props.children}</div>;
}
