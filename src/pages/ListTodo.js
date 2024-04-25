import React from 'react';
import { Link } from 'react-router-dom';
import styles from './listTodo.module.css';

function TodoList({ todos = [
    {id: 1,  title: "buy milk", text: "buy milk from nandus shop"},
    {id: 2, title: "buy eggs", text: 'buy eggs from the market'},
    {id: 3, title: "buy bread", text: ' buy bread from the bakery '}] }) {
    return (
        <div className={styles.listContainer}>
            <h1>Your To-Dos</h1>
            <ul className={styles.todoList}>
                {todos.map(todo => (
                    <li key={todo.id} className={styles.todoItem}>
                        <Link to={`todo/${todo.id}`} className={styles.todoLink}>
                            {todo.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
