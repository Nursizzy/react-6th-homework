import { MouseEventHandler, ReactNode } from 'react';
import { Store } from '../store/store';

// Types
export type dispatch = typeof Store.dispatch;
export type TypeTask = {
  id: string;
  isCompleted: boolean;
  isFavourite: boolean;
  task: string;
};

// Interfaces
export interface HeaderTableProps {
  title?: string;
}

export interface HeaderLogoProps {
  title?: string;
}

export interface ITaskFilters {
  Alltitle: string;
  Completedtitle: string;
  Pendingtitle: string;
  Favouritestitle: string;
  setCompleteFilter: React.Dispatch<React.SetStateAction<boolean>>;
  setAllFilter: React.Dispatch<React.SetStateAction<boolean>>;
  setFavouriteFilter: React.Dispatch<React.SetStateAction<boolean>>;
  setPendingFilter: React.Dispatch<React.SetStateAction<boolean>>;
  allFilter: boolean;
  completeFilter: boolean;
  pendingFilter: boolean;
  favouriteFilter: boolean;
}

export interface ItaskInputForm {
  title: string;
}

export interface Iobj {
  id: string;
  newTaskValue: string;
}

export interface Itasktopost {
  task: string;
  isFavourite: boolean;
  isCompleted: boolean;
}

export interface Itask {
  key: string;
  task: TypeTask;
}

export interface Idropdownitem {
  onClick: MouseEventHandler<HTMLAnchorElement>;
  title: string;
  icon: ReactNode;
}

export interface IModal {
  setModalOpen: (boolean: boolean) => void;
  task: string;
  id: string;
}

export interface ITaskEditField {
  task: TypeTask;
  id: string;
  setIsEditing: (boolean: boolean) => void;
}

export interface ITaskField {
  task: TypeTask;
}

export interface ITaskList {
  children: ReactNode;
}

export interface IButton {
  style?: React.CSSProperties;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: 'submit' | 'reset';
  title: string;
}

export interface IInitialState {
  items: any;
  itemsStatus: null | 'success' | 'pending' | 'rejected';
}

export interface IItemsArray {
  todos: {
    items: [TypeTask];
    itemsStatus: 'success' | 'pending' | 'rejected';
  };
}
