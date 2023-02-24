import React, { useRef, useState } from "react";

const TodoApp = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "hello", checked: false },
  ]);
  const [title, setTitle] = useState("");

  // Math.max 값을 활용하는 idGenerator는 todoList의 초기값을 설정해주지 않으면
  // 생겨나는 todo들의 id값이 infinity로 생성되는 문제점이 있음
  const idGenerator = todoList.map((a) => a.id);

  const inputRef = useRef();

  // if (todoList.id) {
  //   idGenerator = todoList.map((a) => a.id);
  // } else {
  //   return 1;
  // }

  const onInsert = () => {
    const todo = {
      id: Math.max(...idGenerator) + 1,
      title: title,
      checked: false,
    };
    console.log(todo);
    return setTodoList(todoList.concat(todo));
  };

  const onRemove = (id) => {
    setTodoList(
      todoList.filter((a) => {
        return a.id !== id;
      })
    );
  };

  const onChecked = (id) => {
    setTodoList(
      todoList.map((a, i) => {
        return a.id === id ? { ...a, checked: !a.checked } : a;
      })
    );
  };

  return (
    <>
      <hr />
      <h1>Todo App</h1>
      <p>설명: 추가, 체크, 삭제 기능이 있는 Todo App</p>
      <hr />
      <label htmlFor="input">
        할 일을 작성하세요&nbsp;&nbsp;&nbsp;
        <input
          ref={inputRef}
          type="text"
          id="input"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </label>
      <button
        onClick={() => {
          onInsert();
          inputRef.current.value = "";
          inputRef.current.focus();
        }}
      >
        submit
      </button>
      <hr />
      {todoList.map((a, i) => {
        return (
          <>
            <hr />
            <div
              key={a.id}
              style={{
                backgroundColor: a.checked ? "lightgray" : "beige",
                display: "flex",
                alignItems: "center",
              }}
            >
              <div>
                <h4
                  onClick={() => {
                    onChecked(a.id);
                  }}
                >
                  Todo : {a.title}
                </h4>
                <div>완료 여부 : {a.checked ? "완료" : "진행중"}</div>
              </div>
              <button
                style={{ marginLeft: "30px", width: "50px", height: "30px" }}
                onClick={() => {
                  onRemove(a.id);
                  console.log(todoList);
                }}
              >
                삭제
              </button>
            </div>
          </>
        );
      })}
    </>
  );
};

export default TodoApp;
