import React, { useState } from "react";
import Table from "./Table/Table";
import './App.css';
import Form from "./Form/Form";
import { Routes, Route } from "react-router-dom";
import EditUser from "./Edit/EditUser";


function App() {
  const [formList, setFormList] = useState([
    {
      id: 1,
      name: "karthik",
      email: "karthik@gmail.com",
      age: 24,
      content: "I am Full stack developer",
    },
    {
      id: 2,
      name: "Dhamodharan",
      email: "Dhamodharan@gmail.com",
      age: 24,
      content: "I am Chartered Accountant",
    },
  ]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Table formList={formList} setFormList={setFormList} />}
        />
        <Route
          path="/form"
          element={<Form formList={formList} setFormList={setFormList} />}
        />
        <Route
          path="/edit/:id"
          element={<EditUser formList={formList} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

function NotFound() {
  return (
    <div className="error">
      <img
        src="https://d1ivubrj2a21dq.cloudfront.net/wp-content/uploads/2021/09/22115856/ezgif.com-crop.gif"
        alt="404-Not-Found"
      />
    </div>
  );
}

export default App;
