import React, { useState } from 'react';
import style from './TaskEditField.module.css';
import { todosListFetchEditTask } from '../../services/services';
import { Button } from '../UI/Button';
import { ITaskEditField } from '../../interfaces/interface';
import { Store } from '../../store/store';

export function TaskEditField(props: ITaskEditField) {
  const { task, id, setIsEditing } = props;
  const [newTaskValue, setNewTaskValue] = useState(task.task);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    const result = value[0].toUpperCase() + value.slice(1).toLowerCase();
    setNewTaskValue(result);
  }

  function saveEdit(e: React.MouseEvent<HTMLElement>, id: string) {
    e.preventDefault();
    Store.dispatch(
      todosListFetchEditTask({
        id,
        newTaskValue,
      })
    );
    setIsEditing(false);
  }

  function cancelEdit(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    setIsEditing(false);
  }

  return (
    <form className={style.editField}>
      <input
        value={newTaskValue}
        className={style.editInput}
        onChange={(e) => handleChange(e)}
      />
      <Button
        title='Apply'
        onClick={(e: React.MouseEvent<HTMLElement>) => saveEdit(e, id)}
      />
      <Button
        title='Cancel'
        style={{ backgroundColor: '#fc929e' }}
        onClick={(e: React.MouseEvent<HTMLElement>) => cancelEdit(e)}
      />
    </form>
  );
}
