import React from "react";
import TaskList from "../components/TaskList";
import TaskInput from "../components/TaskInput";
import { useSelector } from "react-redux";
import TaskListGrid from "../components/TaskListGrid";

const TodayToDo = () => {
  // Get the all task of the today
  const todayDate = new Date().toISOString().split("T")[0];
  const taskList = useSelector((state) =>
    state.todolist.filter((todo) => todo.date === todayDate)
  );

  const state = useSelector((state) => state.configuration);

  // order all task in descending order.
  const taskListIncomplete = taskList
    .filter((task) => task.completed === false)
    .sort((a, b) => b.id - a.id);
  const taskListCompleted = taskList
    .filter((task) => task.completed === true)
    .sort((a, b) => b.id - a.id);

  return (
    <main className="flex-1 p-4">
      <p className="border-b-2 border-gray-300">
        To Do <i className="ri-arrow-down-s-fill text-2xl"></i>
      </p>

      {/* input to add task */}
      <TaskInput />

      {/* render all incomplete task */}
      <div className="mt-4">
        {taskListIncomplete && taskListIncomplete.length > 0 ? (
          state.grid ? (
            <TaskListGrid task={taskListIncomplete} />
          ) : (
            <TaskList task={taskListIncomplete} />
          )
        ) : (
          <div className="text-sm">No Task For Today</div>
        )}
      </div>

      {/* render all completed task */}
      <div className="mt-4">
        <p className="text-lg">Completed</p>
        {taskListCompleted && taskListCompleted.length > 0 ? (
          <TaskList task={taskListCompleted} />
        ) : (
          <div className="text-sm mt-4">No Completed Task For Today</div>
        )}
      </div>
    </main>
  );
};

export default TodayToDo;
