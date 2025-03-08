import React from "react";
import checkBox from "../assets/Checkboxes.png";
import { useDispatch } from "react-redux";
import { markComplete, markImportant } from "../redux/slices/todolistSlice";
import { addItem } from "../redux/slices/configurationSlice";

const TaskList = ({ task }) => {
  console.log("task :>> ", task);
  const dispatch = useDispatch();

  const taskCompletedHandler = (id) => {
    dispatch(markComplete(id));
  };

  const displayEditBar = (id) => {
    dispatch(addItem(id));
  };
  return (
    <>
      {task.length > 0 &&
        task.map((task) => (
          <div
            className="flex justify-between items-center px-8 py-4 border-t-2 border-gray-300"
            key={task.id}
          >
            <div
              className="w-4 h-4 me-4 appearance-none border rounded-xs"
              onClick={() => taskCompletedHandler(task.id)}
            >
              {task.completed ? <img src={checkBox} alt="checbox" /> : null}
            </div>
            <div
              className="mb-1 font-medium w-full grow"
              onClick={() => displayEditBar(task.id)}
              style={
                task.completed ? { textDecorationLine: "line-through" } : null
              }
            >
              {task.name}
            </div>
            <button
              onClick={() =>
                dispatch(
                  markImportant({ id: task.id, important: !task.important })
                )
              }
            >
              {task.important ? (
                <i className="ri-star-fill text-2xl"></i>
              ) : (
                <i className="ri-star-line text-2xl"></i>
              )}
            </button>
          </div>
        ))}
    </>
  );
};

export default TaskList;
