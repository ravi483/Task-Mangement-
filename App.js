import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Task from "./Task";
import CreateTask from "./CreateTask";
import UpdateTask from "./UpdateTask";

import "./App.css"; // Ensure this line is not commented out

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Task />} />
          <Route path="/create" element={<CreateTask />} />
          <Route path="/update/:id" element={<UpdateTask />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
