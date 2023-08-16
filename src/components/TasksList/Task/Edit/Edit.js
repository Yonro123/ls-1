import { useState } from "react";
import Button from "../../../Button/Button";
import Input from "../../../Input/Input";

import "./Edit.css";

const Edit = ({ setIsVisible, tasks, setTasks, task }) => {
  const [inpValue, setInpValue] = useState(task.title);

  const updateTask = () => {
    const newTasks = [...tasks];
    newTasks.filter((elem, i, arr) => {
      if (task.id === elem.id) {
        arr[i] = { ...elem, title: inpValue };
        setTasks(arr);
      }
    });
    setIsVisible(false);
  };

  return (
    <div className="editTask">
      <Input value={inpValue} setInpValue={setInpValue} />
      <Button value="Update Task" Click={updateTask} />
    </div>
  );
};
export default Edit;
