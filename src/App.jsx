import { useState } from "react";
import Nav from "/components/Nav";
import Input from "../components/Input.jsx";
import Task from "../components/Task.jsx";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  return (
    <>
      <Nav />
      <Input
        task={task}
        setTask={setTask}
        taskList={taskList}
        setTaskList={setTaskList}
      />
      <ul
        className={"w-full flex justify-center gap-1 text-white text-2xl !mt-3"}
      >
        <Task taskList={taskList} setTaskList={setTaskList} />
      </ul>
    </>
  );
}

export default App;
