import React from "react";
//fix the bug in checkbox in completed task section (checkbox should be checked)
function Task(props) {
  const { taskList, setTaskList, handleDeleteTask, handleChange, completedList, setCompletedList } = props;
  return (
    <div>
      {taskList.length > 0 ? (
        taskList.map((task, index) => (
          <li
            key={index}
            onChange={() => handleChange(taskList, index, setTaskList, completedList, setCompletedList)}
            className={"flex gap-2 items-center justify-between"}
          >
            <input type="checkbox" className={"size-[20px]"} />
            {task}
            <button
              onClick={() => handleDeleteTask(index, taskList, setTaskList)}
              type={"button"}
              className={
                "bg-[#E3DE61] text-sm !p-1 rounded-lg cursor-pointer text-black"
              }
            >
              Delete
            </button>
          </li>
        ))
      ) : (
        <p className={"text-[#E3DE61] text-2xl text-center !mt-5 font-bold"}>
          Add tasks
        </p>
      )}
    </div>
  );
}

export default Task;
