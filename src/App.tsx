import { useState } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { TaskInputForm } from './components/TaskInputForm/TaskInputForm';
import { TaskList } from './components/TaskList/TaskList';
import { Tasks } from './components/Tasks/Tasks';
import { TaskFilters } from './components/TasksFilters/TasksFilters';
import { HeaderLogo } from './components/HeaderLogo/HeaderLogo';
import { HeaderTable } from './components/HeaderTable/HeaderTable';
import { TypeTask } from './interfaces/interface';
import { getItemsSelector } from './store/selectors';
import loader from './assets/loader.svg';

function App() {
  const [completeFilter, setCompleteFilter] = useState(false);
  const [allFilter, setAllFilter] = useState(true);
  const [favouriteFilter, setFavouriteFilter] = useState(false);
  const [pendingFilter, setPendingFilter] = useState(false);
  const { items, itemsStatus } = useSelector(getItemsSelector);

  return (
    <>
      <div className='App'>
        <div className='inputFiltersContainer'>
          <HeaderLogo title='React todo' />
          <TaskInputForm title='Create new Task' />
          <TaskFilters
            Alltitle='All'
            Completedtitle='Completed'
            Pendingtitle='Pending'
            Favouritestitle='Favourites'
            setCompleteFilter={setCompleteFilter}
            setAllFilter={setAllFilter}
            setFavouriteFilter={setFavouriteFilter}
            setPendingFilter={setPendingFilter}
            allFilter={allFilter}
            completeFilter={completeFilter}
            pendingFilter={pendingFilter}
            favouriteFilter={favouriteFilter}
          />
        </div>
        <TaskList>
          <HeaderTable title="Task's" />
          {itemsStatus === 'pending' ? (
            <div className='loader'>
              <img src={loader} />
            </div>
          ) : (
            <>
              {items
                .filter((obj: TypeTask) => {
                  if (allFilter) {
                    return obj;
                  } else if (completeFilter) {
                    return obj.isCompleted === true;
                  } else if (favouriteFilter) {
                    return obj.isFavourite === true;
                  } else if (pendingFilter) {
                    return obj.isCompleted === false;
                  }
                })
                .map((task: TypeTask) => (
                  <Tasks key={task.id} task={task} />
                ))}
            </>
          )}
        </TaskList>
      </div>
    </>
  );
}

export default App;
