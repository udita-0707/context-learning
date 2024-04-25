import React, { useState } from 'react';
import styles from './createTodo.module.css';

function TodoForm() {
    const [todo, setTodo] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: Add the todo to the list
        setTodo('');
    };

    return (
        <div className={styles.container}>
            <form className={styles.todoForm} onSubmit={handleSubmit}>
                <h1>Create Your To-Do</h1>
                <input
                    type="text"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    placeholder="Enter your to-do here"
                    required
                    className={styles.input}
                />
                <button type="submit" className={styles.button}>Create To-Do</button>
            </form>
        </div>
    );
}

export default TodoForm;
