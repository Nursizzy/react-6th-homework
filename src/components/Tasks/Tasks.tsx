import { useState } from 'react';
import styles from './Tasks.module.css';
import menu from '../../assets/menu.svg';
import trashIcon from '../../assets/deleteIcon.svg';
import editIcon from '../../assets/editIcon.svg';
import favouriteIcon from '../../assets/favouriteIcon.svg';
import completeIcon from '../../assets/completeIcon.svg';
import {
  todosListFetchSetCompleted,
  todosListFetchSetFavourite,
  todosListFetchUnSetCompleted,
  todosListFetchUnSetFavourite,
} from '../../services/services';
import { DropdownItem } from '../DropdownItem/DropdownItem';
import { ModalWindow } from '../ModalWindow/ModalWindow';
import { TaskEditField } from '../TaskEditField/TaskEditField';
import { TaskField } from '../TaskField/TaskField';
import { Store } from '../../store/store';
import { Itask } from '../../interfaces/interface';

export function Tasks(props: Itask) {
  const { task } = props;
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  function handleEdit(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    setIsEditing(true);
  }

  function handleDelete(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    setModalOpen(true);
  }

  function handlePopupOpen(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    setOpen(!open);
  }

  return (
    <>
      {isEditing ? (
        <TaskEditField task={task} id={task.id} setIsEditing={setIsEditing} />
      ) : (
        <div className={styles.task}>
          {modalOpen && (
            <ModalWindow
              setModalOpen={setModalOpen}
              task={task.task}
              id={task.id}
            />
          )}
          <TaskField task={task} />
          <div className={styles.menu}>
            {open && (
              <div
                className={styles.menuOverlay}
                onClick={(e) => setOpen(false)}
              ></div>
            )}
            <ul>
              <li className={styles.menuBtn}>
                <a
                  href='#'
                  className={styles.menuBtn}
                  onClick={(e) => handlePopupOpen(e)}
                >
                  <img src={menu} className={styles.menuIcon} />
                </a>
              </li>
            </ul>
            {open && (
              <div
                className={styles.dropdownMenu}
                onClick={() => setOpen(false)}
              >
                <DropdownItem
                  onClick={(e: React.MouseEvent<HTMLElement>) =>
                    handleDelete(e)
                  }
                  icon={<img src={trashIcon} className={styles.menuIcon} />}
                  title='Delete Item'
                />
                <DropdownItem
                  onClick={(e: React.MouseEvent<HTMLElement>) => handleEdit(e)}
                  icon={<img src={editIcon} className={styles.menuIcon} />}
                  title='Edit Item'
                />
                {task.isFavourite ? (
                  <DropdownItem
                    onClick={() =>
                      Store.dispatch(todosListFetchUnSetFavourite(task.id))
                    }
                    icon={
                      <img src={favouriteIcon} className={styles.setStar} />
                    }
                    title='Remove from Favourites'
                  />
                ) : (
                  <DropdownItem
                    onClick={() =>
                      Store.dispatch(todosListFetchSetFavourite(task.id))
                    }
                    icon={
                      <img src={favouriteIcon} className={styles.unsetStar} />
                    }
                    title='Add to Favourites'
                  />
                )}
                {task.isCompleted ? (
                  <DropdownItem
                    onClick={() =>
                      Store.dispatch(todosListFetchUnSetCompleted(task.id))
                    }
                    icon={
                      <img
                        src={completeIcon}
                        className={styles.completedIcon}
                      />
                    }
                    title='Mark as pending'
                  />
                ) : (
                  <DropdownItem
                    onClick={() =>
                      Store.dispatch(todosListFetchSetCompleted(task.id))
                    }
                    icon={
                      <img
                        src={completeIcon}
                        className={styles.incompletedIcon}
                      />
                    }
                    title='Mark as completed'
                  />
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
