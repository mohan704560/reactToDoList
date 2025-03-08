import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import checkBox from "../assets/Checkboxes.png";
import { removeItem } from "../redux/slices/configurationSlice";
import {
  deleteTask,
  markComplete,
  markImportant,
} from "../redux/slices/todolistSlice";
import axios from "axios";

const EditBar = () => {
  const taskId = useSelector((state) => state.configuration.editItem);
  const [weather, setWeather] = useState("");
  console.log("taskId", taskId);
  let task = useSelector((state) =>
    state.todolist.filter((task) => task.id === taskId)
  )[0];
  const dispatch = useDispatch();

  const taskCompletedHandler = (id) => {
    dispatch(markComplete(id));
  };

  const APIKey = import.meta.env.VITE_API_URL;

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${
          import.meta.env.VITE_API_KEY
        }&q=mumbai&aqi=no`
      );
      console.log("response.data", response.data);
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div
      className="w-[80%] lg:w-[30%] bg-[#EEF6EF] fixed lg:relative h-full top-14 lg:top-0 right-0"
      style={taskId ? { display: "block" } : { display: "none" }}
    >
      {task && (
        <div className="ps-12">
          <div className="py-6 flex gap-4 justify-between mt-16 border-y-2 border-gray-300">
            <div className="flex items-center">
              <div
                className="w-4 h-4 me-4 appearance-none border rounded-xs"
                onClick={() => taskCompletedHandler(task.id)}
              >
                {task.completed ? <img src={checkBox} alt="checkbox" /> : null}
              </div>
              <span>{task.name}</span>
            </div>
            {/* <p>
              <i className="ri-star-line text-xl me-8"></i>
            </p> */}
            <button
              onClick={() =>
                dispatch(
                  markImportant({ id: task.id, important: !task.important })
                )
              }
            >
              {task.important ? (
                <i className="ri-star-fill text-xl me-8"></i>
              ) : (
                <i className="ri-star-line text-xl me-8"></i>
              )}
            </button>
          </div>
          <div className="py-4 flex border-b-2 border-gray-300">
            <i className="ri-add-line me-4 text-2xl"></i>
            <span>Add Step</span>
          </div>
          <div className="py-4 flex border-b-2 border-gray-300">
            <i className="ri-notification-line me-4 text-xl"></i>
            <span>Set Reminder</span>
          </div>
          <div className="py-4 flex border-b-2 border-gray-300">
            <i className="ri-calendar-line me-4 text-xl"></i>
            <span>Add Due Date</span>
          </div>
          <div className="py-4 flex border-b-2 border-gray-300">
            <i className="ri-repeat-2-line me-4 text-xl"></i>
            <span>Repeat</span>
          </div>
        </div>
      )}

      {weather && (
        <div className="mt-4 ps-12 text-center">
          <img
            src={weather.current.condition.icon}
            alt="Weather Icon"
            className="mt-2 mx-auto"
          />
          <p className="font-medium">Temperature: {weather.current.temp_c}°C</p>
          <p className="font-medium">
            Condition: {weather.current.condition.text}
          </p>
          <p className="font-medium">Humidity: {weather.current.humidity}%</p>
          <p className="font-medium">
            Wind Speed: {weather.current.wind_kph} km/h
          </p>
        </div>
      )}

      <div className="block mt-16 border-t-2 border-gray-300 absolute bottom-0 w-full">
        <div className="py-6 px-4 flex gap-4 justify-between ">
          <button onClick={() => dispatch(removeItem())}>
            <i className="ri-close-line me-4 text-3xl"></i>
          </button>

          <span className="text-gray-500">Created Today</span>
          <button
            onClick={() => {
              dispatch(deleteTask(task.id)), dispatch(removeItem());
            }}
          >
            <i className="ri-delete-bin-6-fill text-2xl me-8"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditBar;
