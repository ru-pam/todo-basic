const Completed = (props) => {
  const {
    taskList,
    setTaskList,
    completedList,
    setCompletedList,
    handleDeleteTask,
    handleChange,
  } = props;
  return (
    <div>
      {completedList.length > 0 ? (
        completedList.map((completed, index) => (
          <li
            key={index}
            defaultChecked={true}
            className={"flex gap-2 items-center justify-between"}
          >
            <input
              type="checkbox"
              checked={true}
              onChange={() =>
                handleChange(
                  completedList,
                  index,
                  setCompletedList,
                  taskList,
                  setTaskList
                )
              }
              className={"size-[20px]"}
            />
            {completed}
            <button
              onClick={() =>
                handleDeleteTask(index, completedList, setCompletedList)
              }
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
        <div>{taskList.length > 0 && <h1>No completed tasks</h1>}</div>
      )}
    </div>
  );
};
export default Completed;
