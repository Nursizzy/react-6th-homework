import React from 'react';
import { ITaskFilters } from '../../interfaces/interface';
import styles from './TasksFilters.module.css';
import notebook from '../../assets/noteBook2.svg';
import arrowFilter from '../../assets/arrowFilter.svg';

export function TaskFilters({
  Alltitle,
  Completedtitle,
  Pendingtitle,
  Favouritestitle,
  setCompleteFilter,
  setAllFilter,
  setFavouriteFilter,
  setPendingFilter,
  allFilter,
  completeFilter,
  pendingFilter,
  favouriteFilter,
}: ITaskFilters) {
  function handleAllFilter() {
    setAllFilter(true);
    setCompleteFilter(false);
    setFavouriteFilter(false);
    setPendingFilter(false);
  }

  function handleCompleteFilter() {
    setAllFilter(false);
    setCompleteFilter(true);
    setFavouriteFilter(false);
    setPendingFilter(false);
  }

  function handlePendingFilter() {
    setAllFilter(false);
    setCompleteFilter(false);
    setFavouriteFilter(false);
    setPendingFilter(true);
  }

  function handleFavouriteFilter() {
    setAllFilter(false);
    setCompleteFilter(false);
    setFavouriteFilter(true);
    setPendingFilter(false);
  }

  return (
    <div className={styles.filterContainer}>
      <div className={styles.taskFilters}>
        <h1 onClick={handleAllFilter}>
          {allFilter && (
            <img src={arrowFilter} className={styles.arrowFilterLogo} />
          )}
          {Alltitle}
        </h1>
        <h1 onClick={handleCompleteFilter}>
          {completeFilter && (
            <img src={arrowFilter} className={styles.arrowFilterLogo} />
          )}
          {Completedtitle}
        </h1>
        <h1 onClick={handlePendingFilter}>
          {pendingFilter && (
            <img src={arrowFilter} className={styles.arrowFilterLogo} />
          )}
          {Pendingtitle}
        </h1>
        <h1 onClick={handleFavouriteFilter}>
          {favouriteFilter && (
            <img src={arrowFilter} className={styles.arrowFilterLogo} />
          )}
          {Favouritestitle}
        </h1>
      </div>
      <img src={notebook} className={styles.noteBookLogo} />
    </div>
  );
}
