import Button from "../../../Button/Button";
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";

import "./ListItem.css";

const ListItem = ({ tasks, setTasks, task, setIsVisible }) => {
  const editTask = () => {
    const newTasks = [...tasks];
    newTasks.filter((elem, i, arr) => {
      if (elem.id === task.id) {
        arr[i] = { ...task };
        setTasks(arr);
      }
    });
    setIsVisible(true);
  };

  const deleteTask = () => {
    let Tasks = [...tasks];
    Tasks = Tasks.filter((elem) => task.id !== elem.id);
    setTasks(Tasks);
  };

  return (
    <div className="list">
      <h3>{task.title}</h3>
      <div className="TaskBtn">
        <Button value={<FiEdit />} Click={editTask} />
        <Button value={<AiFillDelete />} Click={deleteTask} />
      </div>
    </div>
  );
};

export default ListItem;
