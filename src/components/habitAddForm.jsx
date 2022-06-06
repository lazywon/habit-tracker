import React, { PureComponent } from 'react';

class HabitAddForm extends PureComponent {
    inputRef = React.createRef();
    formRef = React.createRef();

    onSubmit = event => {
        event.preventDefault();
        const name = this.inputRef.current.value;
        name && this.props.onAdd(name);
        this.formRef.current.reset();
    };

    render() {
        return (
            <div>
                <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
                    <input 
                        ref={this.inputRef}
                        type="text" 
                        className="add-input" 
                        placeholder="Enter Habit" 
                    />
                    <button className="add-button">Add</button>
                </form>
            </div>
        );
    }
}

export default HabitAddForm;