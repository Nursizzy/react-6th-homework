import { createAsyncThunk } from '@reduxjs/toolkit';
import { Iobj, Itasktopost } from '../interfaces/interface';
import { toast } from 'react-toastify';

export const todosListFetch = createAsyncThunk(
  'todos/todosListFetch',
  async () => {
    const response = await fetch(
      'https://62c06733c134cf51ceceb62e.mockapi.io/tasklist'
    );
    return response?.json();
  }
);

export const todosListFetchPost = createAsyncThunk(
  'todos/todosListFetchPost',
  async (taskToPost: Itasktopost) => {
    const response = await fetch(
      'https://62c06733c134cf51ceceb62e.mockapi.io/tasklist',
      {
        method: 'POST',
        body: JSON.stringify(taskToPost),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      }
    );
    return response.json();
  }
);

export const todosListFetchDelete = createAsyncThunk(
  'todos/todosListFetchDelete',
  async (id: string) => {
    const response = await fetch(
      `https://62c06733c134cf51ceceb62e.mockapi.io/tasklist/${id}`,
      {
        method: 'DELETE',
      }
    );
    return response?.json();
  }
);

export const todosListFetchEditTask = createAsyncThunk(
  'todos/todosListFetchEdit',
  async (obj: Iobj) => {
    const response = await fetch(
      `https://62c06733c134cf51ceceb62e.mockapi.io/tasklist/${obj.id}`,
      {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          task: obj.newTaskValue,
        }),
      }
    );
    return response?.json();
  }
);

export const todosListFetchSetFavourite = createAsyncThunk(
  'todos/todosListFetchSetFavourite',
  async (id: string) => {
    const response = await fetch(
      `https://62c06733c134cf51ceceb62e.mockapi.io/tasklist/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          isFavourite: true,
        }),
      }
    );
    return response?.json();
  }
);

export const todosListFetchUnSetFavourite = createAsyncThunk(
  'todos/todosListFetchUnsetFavourite',
  async (id: string) => {
    const response = await fetch(
      `https://62c06733c134cf51ceceb62e.mockapi.io/tasklist/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          isFavourite: false,
        }),
      }
    );
    return response?.json();
  }
);

export const todosListFetchSetCompleted = createAsyncThunk(
  'todos/todosListFetchSetCompleted',
  async (id: string) => {
    const response = await fetch(
      `https://62c06733c134cf51ceceb62e.mockapi.io/tasklist/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          isCompleted: true,
        }),
      }
    );
    return response?.json();
  }
);

export const todosListFetchUnSetCompleted = createAsyncThunk(
  'todos/todosListFetchUnsetCompleted',
  async (id: string) => {
    const response = await fetch(
      `https://62c06733c134cf51ceceb62e.mockapi.io/tasklist/${id}`,
      {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          isCompleted: false,
        }),
      }
    );
    return response?.json();
  }
);
