import React from "react";
import { Plus, Trash } from "lucide-react";
function Input(props) {
  const { task, setTask } = props;
  const handle = (e) => {
    setTask(e.target.value);
  }
  const handleDelete = () => {
    setTask("");
  }
  return (
    <div className={"flex justify-center !mt-5"}>
      <form
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
  );
}

export default Input;
