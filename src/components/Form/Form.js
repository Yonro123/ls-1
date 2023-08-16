import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";

import "./Form.css";

const Form = ({ setTasks }) => {
  const [inpValue, setInpValue] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    setTasks((prev) => [
      ...prev,
      { id: new Date().getTime(), title: inpValue },
    ]);
    setInpValue("");
  };

  return (
    <form className="form">
      <Input
        value={inpValue}
        placeholder="What is the task today?"
        setInpValue={setInpValue}
      />
      <Button className="formBtn" value="Add Task" Click={addTask} />
    </form>
  );
};

export default Form;
