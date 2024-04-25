import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './todoDetails.module.css';

// Example to-dos data
const todosData = [
    { id: '1', title: 'Buy groceries', timestamp: new Date(Date.now() - 86400000 * 2).toISOString(), completed: false },
    { id: '2', title: 'Walk the dog', timestamp: new Date(Date.now() + 86400000 * 4).toISOString(), completed: false },
    { id: '3', title: 'Read a book', timestamp: new Date(Date.now() + 86400000 * 10).toISOString(), completed: false }
];

function TodoDetails() {
    const { todoId } = useParams();
    const navigate = useNavigate();
    const [todo, setTodo] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [title, setTitle] = useState('');

    useEffect(() => {
        const todo = todosData.find(t => t.id === todoId);
        if (todo) {
            setTodo(todo);
            setTitle(todo.title);
        }
    }, [todoId]);

    const handleEdit = () => {
        if (editMode && title !== todo.title) {
            // Here, save the changes to the server or state
            const updatedTodo = { ...todo, title: title };
            setTodo(updatedTodo);
        }
        setEditMode(!editMode);
    };

    const handleComplete = () => {
        const updatedTodo = { ...todo, completed: true };
        setTodo(updatedTodo);
        // Save the completion status to the server or state here
    };

    const handleDelete = () => {
        // Here you would typically call an API to delete the todo
        console.log('Deleting todo:', todoId);
        navigate('/');  // Redirect to the home page or list view after deletion
    };

    if (!todo) return <p>Loading...</p>;

    const urgency = getUrgencyLevel(new Date(todo.timestamp));

    return (
        <div className={`${styles.detailsContainer} ${styles[urgency]}`}>
            <button className={styles.deleteButton} onClick={handleDelete}>Delete</button>
            <h1>Details for To-Do:</h1>
            {!editMode ? (
                <h2>{todo.title}</h2>
            ) : (
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            )}
            <p>Due Date: {new Date(todo.timestamp).toLocaleDateString()}</p>
            <button onClick={handleEdit}>{editMode ? 'Save' : 'Edit'}</button>
            <button onClick={handleComplete} disabled={todo.completed}>Complete</button>
        </div>
    );
}

function getUrgencyLevel(timestamp) {
    const now = new Date();
    const dueDate = new Date(timestamp);
    const msPerDay = 86400000;
    const daysDiff = (dueDate - now) / msPerDay;

    if (daysDiff <= 1) return 'urgent';
    if (daysDiff <= 7) return 'moderate';
    return 'normal';
}

export default TodoDetails;
