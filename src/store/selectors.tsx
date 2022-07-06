import { IItemsArray } from '../interfaces/interface';

export const getItemsSelector = (state: IItemsArray) => state.todos;
