import { useState, useEffect } from "react";
import "./Todo.scss";

const Todo = () => {
  const [value, setValue] = useState(""); //Input Value

  // useEffect(() => {
  //   console.log("change");
  // }, [value]);//dependency

  // useEffect(() => {
  //   console.log("mount");
  // }, []);//first render

  // useEffect(() => {
  //   return () => {
  //     console.log("good bye");
  //   };
  // });//component unmount

  // useEffect(() => {
  //   console.log("rerender");
  // }); //every rerender

  const [data, setData] = useState([{ id: 1, title: "Learn Todo" }]); //Data

  const clearValue = () => {
    setValue("");
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const addTask = () => {
    if (value.trim()) {
      setData((prev) => {
        return [...prev, { id: prev.length + 1, title: value.trim() }];
      });
    }
    clearValue();
  };
  const removeTask = (id) => {
    const filteredArr = data.filter((todo) => todo.id !== id);
    setData(filteredArr);
  };

  return (
    <div className="todo">
      <div className="todo-head">
        <input
          type="text"
          className="todo-head-input"
          value={value}
          onChange={handleChange}
          placeholder="Add task..."
        />
        <button className="todo-head-button" onClick={addTask}>
          ADD TODO
        </button>
      </div>
      <div className="todo-body">
        {data.map((item) => {
          return (
            <div className="todo-body-item" key={item.id}>
              {item.title}
              <button
                className="todo-body-item-delete"
                onClick={() => {
                  removeTask(item.id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Todo;
