import styles from './ModalWindow.module.css';
import { todosListFetchDelete } from '../../services/services';
import { Button } from '../UI/Button';
import { Store } from '../../store/store';
import { IModal } from '../../interfaces/interface';

export function ModalWindow(props: IModal) {
  const { setModalOpen, task, id } = props;

  function deleteItem(e: React.MouseEvent<HTMLElement>, id: string) {
    e.preventDefault();
    setModalOpen(false);
    Store.dispatch(todosListFetchDelete(id));
  }

  function cancelDeleteItem(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    setModalOpen(false);
  }

  return (
    <>
      <div className={styles.overlay} onClick={(e) => setModalOpen(false)}>
        {''}
      </div>
      <div className={styles.modalWindow}>
        <h1> Really want to delete this item?</h1>
        <span className={styles.modalTask}>
          <span
            style={{ fontWeight: '700', color: '#fc929e' }}
            className={styles.titleTask}
          >
            Selected Task:{' '}
          </span>
          {task}
        </span>
        <div className={styles.modalBtns}>
          <Button
            title='Cancel'
            style={{ width: '50%', margin: '10px' }}
            onClick={(e: React.MouseEvent<HTMLElement>) => cancelDeleteItem(e)}
          />
          <Button
            title='Delete'
            style={{ backgroundColor: '#fc929e', width: '50%', margin: '10px' }}
            onClick={(e: React.MouseEvent<HTMLElement>) => deleteItem(e, id)}
          />
        </div>
      </div>
    </>
  );
}
