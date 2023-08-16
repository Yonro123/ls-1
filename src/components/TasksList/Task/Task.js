import { useState } from "react";
import Edit from "./Edit/Edit";
import ListItem from "./ListItem/ListItem";

const Task = ({ task, tasks, setTasks }) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <li>
      {isVisible || (
        <ListItem
          task={task}
          tasks={tasks}
          setTasks={setTasks}
          setIsVisible={setIsVisible}
        />
      )}
      {isVisible && (
        <Edit
          task={task}
          tasks={tasks}
          setTasks={setTasks}
          setIsVisible={setIsVisible}
        />
      )}
    </li>
  );
};
export default Task;
