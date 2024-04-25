import {createBrowserRouter, RouterProvider} from "react-router-dom";
import TodoDetails from "./pages/todoDetails";
import TodoList from "./pages/ListTodo";
import CreateTodo from "./pages/createTodo";
import ErrorPage from "./components/errorPage";
import RootTodoElement from "./components/rootTodo";
import CartApplication from './cartApplication/App';
import ThemePage from './themeSwticher/themedPage';
const BrowserRouter = createBrowserRouter([
  {
    path: "/todoApp",
    element: <RootTodoElement />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <TodoList />,
      },
      {
        path: "todo/:todoId",
        element: <TodoDetails />,
      },
      {
        path: "create",
        element: <CreateTodo />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
  <ThemePage />
    </div>
  );
}

export default App;
