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
    let newTasks = [...tasks];
    newTasks = newTasks.filter((elem) => task.id !== elem.id);
    setTasks(newTasks);
  };

  return (
    <div className="list">
      <h3>{task.title}</h3>
      <div className="TaskBtn">
        <Button value={<FiEdit />} onClick={editTask} />
        <Button value={<AiFillDelete />} onClick={deleteTask} />
      </div>
    </div>
  );
};

export default ListItem;
