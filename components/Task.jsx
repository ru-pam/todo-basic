function Task(props) {
  const { taskList, setTaskList, handleDeleteTask, handleChange, completedList, setCompletedList } = props;
  return (
    <div>
      {taskList.length > 0 ? (
        <>
          <h3 className={"!mb-4"}>Remaining Tasks: {taskList.length}</h3>
          {taskList.map((task, index) => (
            <li
              key={index}
              className={"flex gap-2 items-center justify-between"}
            >
              <input type="checkbox"
                     checked={false}
                     onChange={() => handleChange(taskList, index, setTaskList, completedList, setCompletedList)}
                     className={"size-[20px]"}/>
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
          ))}
        </>
      ) : (
        <p className={"text-[#E3DE61] text-2xl text-center !mt-5 font-bold"}>
          Add tasks
        </p>
      )}
    </div>
  );
}

export default Task;
