import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/slices/todolistSlice";

const TaskInput = () => {
  const taskRef = useRef(null);
  const timeInputRef = useRef(null);
  const dateInputRef = useRef(null);
  const [repeatTask, setRepeatTask] = useState(false);

  const dispatch = useDispatch();

  // function to add new task
  const addTaskHandler = () => {
    if (!taskRef.current.value) {
      alert("Task name is required");
      return;
    }
    const todayDate = new Date().toISOString().split("T")[0];

    // all data colleted fom the input
    const payload = {
      name:
        taskRef.current.value.charAt(0).toUpperCase() +
        taskRef.current.value.slice(1),
      date: dateInputRef.current.value ? dateInputRef.current.value : todayDate,
      reminder:
        timeInputRef.current.value !== "" ? timeInputRef.current.value : null,
    };

    dispatch(addTask(payload));

    if (repeatTask) {
      dispatch(addTask(payload));
    }

    taskRef.current.value = "";
    setRepeatTask(false);
  };

  return (
    <div className="bg-linear-to-b from-white to-[#D0FFD2] opacity-50">
      {/* input to add new task  */}
      <textarea
        rows="2"
        cols="20"
        ref={taskRef}
        className="py-8 px-4 w-full text-base font-medium  mt-4 focus:outline-none capitalize"
        placeholder="Add A Task"
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            addTaskHandler();
          }
        }}
      ></textarea>
      <div className="flex justify-between px-6 py-4">
        <div className="flex gap-8">
          {/* button to add reminder  */}
          <button
            className="relative"
            onClick={() => timeInputRef.current.showPicker()}
          >
            <i className="ri-notification-line text-2xl text-[#357937]"></i>
            <input
              type="time"
              ref={timeInputRef}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </button>

          {/* button to add repeat to the task  */}
          <button
            onClick={() => setRepeatTask(!repeatTask)}
            className="text-center w-12 h-12"
            style={
              repeatTask
                ? {
                    backgroundColor: "oklch(0.723 0.219 149.579)",
                    borderRadius: "50%",
                  }
                : null
            }
          >
            <i className="ri-repeat-2-line text-2xl text-[#357937]"></i>
          </button>
          {/* button to add date to the task  */}
          <button className="relative" onClick={() => dateInputRef.current.showPicker()}>
            <i className="ri-calendar-line text-2xl text-[#357937]"></i>
            <input
              type="date"
              ref={dateInputRef}
              className="absolute inset-0 opacity-0 cursor-pointer"
            />
          </button>
        </div>

        {/* button to submit the input task to save in database  */}
        <button
          type="button"
          onClick={addTaskHandler}
          className="block bg-green-200 text-[#357937] font-medium px-4 py-2 rounded-xl"
        >
          ADD TASK
        </button>
      </div>
    </div>
  );
};

export default TaskInput;
