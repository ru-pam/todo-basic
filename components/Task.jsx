import React from "react";
//add completed task section
function Task(props) {
  const { taskList, setTaskList } = props;
  const handleDeleteTask = (index) => {
    const updatedList = taskList.filter((_, i) => i !== index);
    setTaskList(updatedList);
  };
  return (
    <div>
      {taskList.length > 0 ? (
        taskList.map((task, index) => (
          <li key={index} className={"flex gap-2 items-center justify-between"}>
            <input type="checkbox" className={"size-[20px]"} />
            {task}
            <button
              onClick={() => handleDeleteTask(index)}
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
