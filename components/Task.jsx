import React from "react";

function Task(props) {
  const { task } = props;
  return <div>
    {task === "" && <p className={"text-center text-2xl font-bold !mt-5 text-[#E3DE61]"}>Add tasks</p>}
  </div>;
}

export default Task;
