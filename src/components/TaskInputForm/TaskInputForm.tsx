import React, { useState } from 'react';
import styles from './TaskInputForm.module.css';
import { todosListFetchPost } from '../../services/services';
import { Button } from '../UI/Button';
import { Store } from '../../store/store';
import { ItaskInputForm } from '../../interfaces/interface';

const initialValues = {
  task: '',
  isFavourite: false,
  isCompleted: false,
};

export function TaskInputForm({ title }: ItaskInputForm) {
  const [taskData, SetTask] = useState(initialValues);

  function handleChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    const value = e.target.value;
    if (value === '') {
      SetTask((prev) => ({
        ...prev,
        task: '',
      }));
    } else {
      const result = value[0].toUpperCase() + value.slice(1).toLowerCase();
      SetTask((prev) => ({
        ...prev,
        task: result.slice(0, 160),
      }));
    }
  }

  function handleSubmit(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault();
    if (taskData.task !== '') {
      Store.dispatch(todosListFetchPost(taskData));
      SetTask(initialValues);
    }
  }

  return (
    <form className={styles.todosInputContainer} onSubmit={handleSubmit}>
      <p className={styles.textCounter}>{taskData.task.length}/160</p>
      <textarea
        className={styles.textArea}
        value={taskData.task}
        onChange={handleChange}
        rows={Number(4)}
        placeholder='Please type new Task here...'
      ></textarea>
      <Button title={title} type='submit' style={{ marginTop: '10px' }} />
    </form>
  );
}
