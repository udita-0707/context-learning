import React, {useEffect} from "react";
import {toast} from "react-toastify";

const TodoContext = React.createContext();

function TodoProvider({children}) {
    const [todos, setTodos] = React.useState([]);
    useEffect(() => {
        // load todos from local storage
        const localTodos = localStorage.getItem("todos");
        if (localTodos) {
            setTodos(JSON.parse(localTodos));
        }
    }, []);

    useEffect(() => {
        // save todos to local storage
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const addTodo = (todoText, retries= 1) => {
        let todo = {
            id: Math.floor(Math.random() * 1000),
            text: todoText,
            isCompleted: false,
            timestamp: Date.now()
        };
        const currentIdPresent = todos.find((todo) => todo.id === todo.id);
        if (!currentIdPresent) {
            setTodos([...todos, todo]);
        } else if (retries < 5) {
            addTodo(todoText, retries + 1);
        } else {
            toast("Failed to add todo");
        }
    }

    const removeTodo = (todoId) => {
        setTodos(todos.filter((todo) => todo.id !== todoId));
    }

    const markTodoAsCompleted = (todoId) => {
        setTodos(todos.map((todo) => {
            if (todo.id === todoId) {
                return {...todo, isCompleted: true};
            }
            return todo;
        }));
    }

    const editTodo = (todoId, newText) => {
        setTodos(todos.map((todo) => {
            if (todo.id === todoId) {
                return {...todo, text: newText};
            }
            return todo;
        }));
    }

    return (
        <TodoContext.Provider value={{todos, addTodo, removeTodo, editTodo, markTodoAsCompleted}}>
            {children}
        </TodoContext.Provider>
    );

}

const useTodos = () => {
    const context = React.useContext(TodoContext);
    if (!context) {
       toast("useTodos must be used within a TodoProvider")
    }
    return context;
}

export {useTodos, TodoProvider};
