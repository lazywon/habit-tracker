import React, { useCallback, useState } from 'react';
import './app.css';
import Navbar from '../components/navbar/navbar';
import Habits from '../components/habits/habits';

const App = ({ presenter }) => {
  // const [habits, setHabits] = useState([
  //     {id: 1, name: 'Reading', count: 0},
  //     {id: 2, name: 'Running', count: 0},
  //     {id: 3, name: 'Coding', count: 0},
  // ]);
  const [habits, setHabits] = useState(presenter.getHabits());

  const handleIncrement = useCallback((habit) => {
    presenter.increment(habit, setHabits);
  }, []);

  const handleDecrement = useCallback((habit) => {
    presenter.decrement(habit, setHabits);
  }, []);

  const handleDelete = useCallback((habit) => {
    presenter.delete(habit, setHabits);
  }, []);

  const handleAdd = useCallback((name) => {
    presenter.add(name, setHabits);
  }, []);

  const handelReset = useCallback(() => {
    presenter.reset(setHabits);
  }, []);

  return (
    <>
      <Navbar totalCount={habits.filter((item) => item.count > 0).length} />
      <Habits
        habits={habits}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onDelete={handleDelete}
        onAdd={handleAdd}
        onReset={handelReset}
      />
    </>
  );
};

export default App;
