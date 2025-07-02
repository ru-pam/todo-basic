import { useState } from "react";
import Nav from "/components/Nav";
import Input from "../components/Input.jsx";
import Task from "../components/Task.jsx";
import Completed from "../components/Completed.jsx";

function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [completedList, setCompletedList] = useState(["task"]);
  const handleDeleteTask = (index, list, setList) => {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
  };
  const handleChange = (list, index, setList, list2, setList2) => {
    const updatedList = list.filter((_, i) => i !== index);
    setList(updatedList);
    const item = list[index];
    const newList = [...list2, item];
    setList2(newList);
  }
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
        <Task
          taskList={taskList}
          setTaskList={setTaskList}
          handleDeleteTask={handleDeleteTask}
          handleChange={handleChange}
          completedList={completedList}
          setCompletedList={setCompletedList}
        />
      </ul>
      <ul
        className={"w-full flex justify-center gap-1 text-white text-2xl !mt-3"}
      >
        <Completed
          completedList={completedList}
          setCompletedList={setCompletedList}
          handleDeleteTask={handleDeleteTask}
          taskList={taskList}
          setTaskList={setTaskList}
          handleChange={handleChange}
        />
      </ul>
    </>
  );
}

export default App;
