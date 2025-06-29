import React from "react";

function Task(props) {
  const { taskList } = props;
  return <div>
    {taskList.length > 0 ? (
      taskList.map((task, index) => (
        <li key={index} className={"flex gap-2 items-center"}>
          <input type="checkbox" className={"size-[20px]"}/>
          {task}
        </li>
      ))
    ) : (
      <p className={"text-[#E3DE61] text-2xl text-center !mt-5 font-bold"}>Add tasks</p>
    )}
  </div>;
}

export default Task;
