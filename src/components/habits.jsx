import React from 'react';
import Habit from './habit';
import HabitAddForm from './form/habitAddForm';

const Habits = ({
  habits,
  onIncrement,
  onDecrement,
  onDelete,
  onAdd,
  onReset,
}) => {
  return (
    <>
      <HabitAddForm onAdd={onAdd} />
      <ul>
        {habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
      </ul>
      <button className="habits-reset" onClick={onReset}>
        Rest All
      </button>
    </>
  );
};

export default Habits;
