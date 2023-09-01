import React from "react";

import "./styles.css";

import AddForm from "./components/AddForm";
import Checklist from "./components/Checklist";

export default function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddForm />
      <Checklist />
    </div>
  );
}
