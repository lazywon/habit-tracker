import React, { memo, useRef } from 'react';

const HabitAddForm = memo(({onAdd}) => {
    const formRef = useRef();
    const inputRef = useRef();

    const onSubmit = event => {
        event.preventDefault();
        const name = inputRef.current.value;

        name && onAdd(name);
        formRef.current.reset();
    };

    return (
        <form ref={formRef} className="add-form" onSubmit={onSubmit}>
            <input 
                ref={inputRef}
                type="text" 
                className="add-input" 
                placeholder="Enter Habit" 
            />
            <button className="add-button">Add</button>
        </form>
    );
});

export default HabitAddForm;
