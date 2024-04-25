import {Outlet} from "react-router-dom";
import Header from "./header";

function RootTodo() {
  return (
    <>
      <Header />
        <Outlet />
    </>
  );
}
export default RootTodo;
