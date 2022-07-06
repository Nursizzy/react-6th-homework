import { createSlice } from '@reduxjs/toolkit';
import {
  todosListFetch,
  todosListFetchPost,
  todosListFetchDelete,
  todosListFetchSetFavourite,
  todosListFetchUnSetFavourite,
  todosListFetchSetCompleted,
  todosListFetchUnSetCompleted,
  todosListFetchEditTask,
} from '../services/services';
import { IInitialState } from '../interfaces/interface';
import { TypeTask } from '../interfaces/interface';
import { toast } from 'react-toastify'; // Вопреки твоему замечанию с прошлого урока,
// Я добавил тосты сюда потому что хотел чтобы они выполнялись именно тогда когда вернется определенный ответ с сервера
// Сорри, не придумал ничего лучше :(

const todosListSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    itemsStatus: null,
  } as IInitialState,
  reducers: {},
  extraReducers: {
    [todosListFetch.pending.type]: (state) => {
      state.itemsStatus = 'pending';
    },
    [todosListFetch.fulfilled.type]: (state, action) => {
      state.itemsStatus = 'success';
      state.items = action.payload;
      toast.success(`All tasks loaded to App!`, {
        position: 'bottom-right',
      });
    },
    [todosListFetchPost.fulfilled.type]: (state, action) => {
      state.items.push(action.payload);
      toast.success(`New Task added to list!`, {
        position: 'bottom-right',
      });
    },
    [todosListFetchDelete.fulfilled.type]: (state, action) => {
      state.items = state.items.filter(
        (item: TypeTask) => item.id !== action.payload.id
      );
      toast.info(`Task has been removed from list!`, {
        position: 'bottom-right',
      });
    },
    [todosListFetchSetFavourite.fulfilled.type]: (state, action) => {
      state.items = state.items.filter(
        (item: TypeTask) => item.id !== action.payload.id
      );
      state.items = [...state.items, action.payload];
      state.items.sort((a: { id: number }, b: { id: number }) => a.id - b.id);
    },
    [todosListFetchUnSetFavourite.fulfilled.type]: (state, action) => {
      state.items = state.items.filter(
        (item: TypeTask) => item.id !== action.payload.id
      );
      state.items = [...state.items, action.payload];
      state.items.sort((a: { id: number }, b: { id: number }) => a.id - b.id);
    },
    [todosListFetchSetCompleted.fulfilled.type]: (state, action) => {
      state.items = state.items.filter(
        (item: TypeTask) => item.id !== action.payload.id
      );
      state.items = [...state.items, action.payload];
      state.items.sort((a: { id: number }, b: { id: number }) => a.id - b.id);
    },
    [todosListFetchUnSetCompleted.fulfilled.type]: (state, action) => {
      state.items = state.items.filter(
        (item: TypeTask) => item.id !== action.payload.id
      );
      state.items = [...state.items, action.payload];
      state.items.sort((a: { id: number }, b: { id: number }) => a.id - b.id);
    },
    [todosListFetchEditTask.fulfilled.type]: (state, action) => {
      state.items = state.items.filter(
        (item: TypeTask) => item.id !== action.payload.id
      );
      state.items = [...state.items, action.payload];
      state.items.sort((a: { id: number }, b: { id: number }) => a.id - b.id);
      toast.info(`Task has been modified!`, {
        position: 'bottom-right',
      });
    },
  },
});

export default todosListSlice.reducer;
