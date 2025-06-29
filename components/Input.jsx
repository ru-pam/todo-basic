import React from "react";
import {useState} from "react";
import { Plus, Trash } from "lucide-react";
import Task from "./Task";
function Input(props) {
  const [taskList, setTaskList] = useState([]);
  const { task, setTask } = props;
  const handle = (e) => {
    setTask(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(task.trim() === "") return;
    setTaskList([...taskList, task]);
    setTask("")
  }
  const handleDelete = () => {
    setTask("");
  }
  return (
    <>
    <div className={"flex justify-center !mt-5"}>
      <form
        onSubmit={handleSubmit}
        action=""
        className={
          "flex items-center justify-center w-[60%] rounded-lg gap-1"
        }
      >
        <input
          onChange={handle}
          type="text"
          className={
            "bg-[#437057] !py-1 text-2xl outline-none !px-3 rounded-tl-lg rounded-bl-lg text-[#E3DE61]"
          }
          name={"task"}
          value={task}
        />

        <div className="flex gap-1">
          {task !== "" && (
            <button
              onClick={handleDelete}
              type={"button"}
              className={"bg-[#E3DE61] !px-2 !py-2 text-2xl cursor-pointer"}
            >
              <Trash />
            </button>
          )}
          <button
            type="submit"
            className={
              "bg-[#E3DE61] !px-2 !py-2 text-2xl cursor-pointer rounded-tr-lg rounded-br-lg "
            }
          >
            <Plus />
          </button>
        </div>
      </form>
    </div>
      <ul className={"!mt-5 flex justify-center text-2xl text-[#E3DE61]"}>
      <Task taskList={taskList} />
      </ul>
    </>
  );
}

export default Input;
