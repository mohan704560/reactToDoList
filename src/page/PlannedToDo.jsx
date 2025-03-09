import React from 'react';
import TaskList from "../components/TaskList";
import { useSelector } from "react-redux";

const PlannedToDo = () => {
   // get all task list.
  const taskList = useSelector((state) => state.todolist);

  const dateTaskArray = getDateTask(taskList);

  // function to get all task date wise in accending.
  function getDateTask(tasks) {
    const dateArray = tasks.reduce((acc, task) => {
      if (!acc.includes(task.date)) {
        acc.push(task.date);
      }
      return acc;
    }, []);
    const sorteddateArray = dateArray.sort((a, b) => new Date(a) - new Date(b));
    const dateTaskArray = sorteddateArray.map((date) => ({
      date: date,
      task: tasks
        .filter((task) => task.date === date)
        .sort((a, b) => b.id - a.id),
    }));
    return dateTaskArray;
  }

  return (
    <main className="flex-1 p-4">
      <p className="border-b-2 border-gray-300">
       Planned Task <i className="ri-arrow-down-s-fill text-2xl"></i>
      </p>

      {/* to render all task datewise */}
      {dateTaskArray.map((dateTask) => {
        return (
          <div className="mt-8">
            <p className="text-base">{dateTask.date}</p>
            <TaskList task={dateTask.task} />
          </div>
        );
      })}
    </main>
  )
}

export default PlannedToDo