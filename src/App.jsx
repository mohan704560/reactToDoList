import "./App.css";
import TodayToDo from "./page/TodayToDo";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Login from "./page/Login";
import Layout from "./page/Layout";
import AllToDo from "./page/AllToDo";
import ImportantToDo from "./page/ImportantToDo";
import PlannedToDo from "./page/PlannedToDo";

function App() {
  return (
    // .....................................Routing of the website ..................................
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="todo" element={<Layout />}>
          <Route index element={<TodayToDo />} />
          <Route path="all" element={<AllToDo />} />
          <Route path="important" element={<ImportantToDo />} />
          <Route path="planned" element={<PlannedToDo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
