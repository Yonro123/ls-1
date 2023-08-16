import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import "./TasksList.css";

function TaskList({ tasks, setTasks }) {
  const [inpValue, setInpValue] = useState("");

  return (
    <ul className="TasksList">
      {tasks.map((elem) => {
        return (
          <li key={elem.id}>
            {elem.isVisible || (
              <div className="list">
                <h3>{elem.title}</h3>
                <div className="TaskBtn">
                  <Button
                    value={<FiEdit />}
                    Click={() => {
                      const newTasks = [...tasks];
                      newTasks.filter((task, i, arr) => {
                        if (task.id === elem.id) {
                          arr[i] = { ...task, isVisible: true };
                          setInpValue(task.title);
                          setTasks(arr);
                        }
                      });
                    }}
                  />
                  <Button
                    value={<AiFillDelete />}
                    Click={() => {
                      let Tasks = [...tasks];
                      Tasks = Tasks.filter((task) => elem.id !== task.id);
                      setTasks(Tasks);
                    }}
                  />
                </div>
              </div>
            )}
            {elem.isVisible && (
              <div className="editTask">
                <Input value={inpValue} setInpValue={setInpValue} />
                <Button
                  value="Update Task"
                  Click={() => {
                    const newTasks = [...tasks];
                    newTasks.filter((task, i, arr) => {
                      if (task.id === elem.id) {
                        arr[i] = { ...task, title: inpValue, isVisible: false };
                        setTasks(arr);
                      }
                    });
                  }}
                />
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default TaskList;
