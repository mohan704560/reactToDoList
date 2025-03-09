import React from "react";
import checkBox from "../assets/Checkboxes.png";
import { useDispatch } from "react-redux";
import { markComplete, markImportant } from "../redux/slices/todolistSlice";
import { addItem } from "../redux/slices/configurationSlice";

const TaskList = ({ task }) => {
  const dispatch = useDispatch();

  // function to perform completed task.
  const taskCompletedHandler = (id) => {
    dispatch(markComplete(id));
  };

  // function to open or close edit bar
  const displayEditBar = (id) => {
    dispatch(addItem(id));
  };
  return (
    <>
      {/* to render the list of the all task in the dom */}
      {task.length > 0 &&
        task.map((task) => (
          <div
            className="flex justify-between items-center px-8 py-4 border-t-2 border-gray-300"
            key={task.id}
          >
            {/* complete or incomplete checkbox  */}
            <div
              className="w-4 h-4 me-4 appearance-none border rounded-xs"
              onClick={() => taskCompletedHandler(task.id)}
            >
              {task.completed ? <img src={checkBox} alt="checbox" /> : null}
            </div>

            {/* to display the name of the task  */}
            <div
              className="mb-1 font-medium w-full grow"
              onClick={() => displayEditBar(task.id)}
              style={
                task.completed ? { textDecorationLine: "line-through" } : null
              }
            >
              {task.name}
            </div>
            {/* to mark the task important or not  */}
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
