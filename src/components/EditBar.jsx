import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../redux/slices/configurationSlice";
import { deleteTask } from "../redux/slices/todolistSlice";

const EditBar = () => {
  const taskId = useSelector((state) => state.configuration.editItem);
  console.log("taskId", taskId);
  let task = useSelector((state) =>
    state.todolist.filter((task) => task.id === taskId)
  )[0];
  const dispatch = useDispatch();

  return (
    <div
      className="w-[30%] bg-[#EEF6EF] relative h-full"
      style={taskId ? { display: "block" } : { display: "none" }}
    >
      {task && (
        <div className="ps-12">
          <div className="py-6 flex gap-4 justify-between mt-16 border-y-2 border-gray-300">
            <p>
              <i class="ri-square-line me-4 text-xl"></i>
              <span>{task.name}</span>
            </p>
            <p>
              <i class="ri-star-line text-xl me-8"></i>
            </p>
          </div>
          <div className="py-4 flex border-b-2 border-gray-300">
            <i class="ri-add-line me-4 text-2xl"></i>
            <span>Add Step</span>
          </div>
          <div className="py-4 flex border-b-2 border-gray-300">
            <i class="ri-notification-line me-4 text-xl"></i>
            <span>Set Reminder</span>
          </div>
          <div className="py-4 flex border-b-2 border-gray-300">
            <i class="ri-calendar-line me-4 text-xl"></i>
            <span>Add Due Date</span>
          </div>
          <div className="py-4 flex border-b-2 border-gray-300">
            <i class="ri-repeat-2-line me-4 text-xl"></i>
            <span>Repeat</span>
          </div>
        </div>
      )}

      <div className="block mt-16 border-t-2 border-gray-300 absolute bottom-0 w-full">
        <div className="py-6 px-4 flex gap-4 justify-between ">
          <button onClick={() => dispatch(removeItem())}>
            <i class="ri-close-line me-4 text-3xl"></i>
          </button>

          <span className="text-gray-500">Created Today</span>
          <button
            onClick={() => {
              dispatch(deleteTask(task.id)), dispatch(removeItem());
            }}
          >
            <i class="ri-delete-bin-6-fill text-2xl me-8"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBar;
