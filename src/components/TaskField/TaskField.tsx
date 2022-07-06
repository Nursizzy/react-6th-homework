import styles from './TaskField.module.css';
import {
  todosListFetchSetCompleted,
  todosListFetchSetFavourite,
  todosListFetchUnSetCompleted,
  todosListFetchUnSetFavourite,
} from '../../services/services';
import setStar from '../../assets/SetStar.svg';
import UnsetStar from '../../assets/UnsetStar.svg';
import completeIcon from '../../assets/completeIcon.svg';
import { Store } from '../../store/store';
import { ITaskField } from '../../interfaces/interface';

export function TaskField(props: ITaskField) {
  const { task } = props;
  return (
    <div className={styles.taskField}>
      {task.isCompleted ? (
        <span
          className={styles.completedIcon}
          onClick={() => Store.dispatch(todosListFetchUnSetCompleted(task.id))}
        >
          <img src={completeIcon} className={styles.completeIcon} />
        </span>
      ) : (
        <span
          className={styles.completedIcon}
          onClick={() => Store.dispatch(todosListFetchSetCompleted(task.id))}
        >
          <img src={completeIcon} className={styles.incompleteIcon} />
        </span>
      )}
      {task.isCompleted ? (
        <span>
          <span className={styles.completedText}>{task.task}</span>{' '}
          <span style={{ color: '#8dc891' }}>Done!</span>
        </span>
      ) : (
        <span>{task.task}</span>
      )}
      {task.isFavourite ? (
        <span
          className={styles.favouriteIcon}
          onClick={() => Store.dispatch(todosListFetchUnSetFavourite(task.id))}
        >
          <img src={UnsetStar} className={styles.logo} />
        </span>
      ) : (
        <span
          className={styles.favouriteIcon}
          onClick={() => Store.dispatch(todosListFetchSetFavourite(task.id))}
        >
          <img src={setStar} className={styles.unsetStar} />
        </span>
      )}
    </div>
  );
}
