import React, { useState, useEffect } from "react";

import styled from "styled-components";

import PropTypes from "prop-types";

const TodoWrapper = styled.div`
  background-color: #e2e2e2;
  color: #333;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const TodoTitle = styled.h2`
  display: inline-block;

  ${({ checked }: Pick<Todo, "checked">) =>
    checked && "text-decoration: line-through"}
`;

const TodoCheckbox = styled.input.attrs({
  type: "checkbox"
})`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

export type Todo = {
  title: string;
  checked: boolean;
  key: number;
};

type Props = {
  todos: Todo[];
};

function TodoPropTypes(props: Props) {
  const [todos, setTodos] = useState<Props["todos"]>([]);

  const { todos: propTodos } = props;

  useEffect(() => setTodos(propTodos), [propTodos]);

  const handleCheck = key => {
    const newTodos = todos.map(todo =>
      todo.key === key ? { ...todo, checked: !todo.checked } : todo
    );

    setTodos(newTodos);
  };

  return (
    <div>
      {todos.map(({ title, checked, key }) => (
        <TodoWrapper key={key}>
          <TodoCheckbox onClick={() => handleCheck(key)} />
          <TodoTitle checked={checked}>{title}</TodoTitle>
        </TodoWrapper>
      ))}
    </div>
  );
}

export default TodoPropTypes;

export const todos = [
  {
    key: 0,
    title: "Fazer café",
    checked: false
  },
  {
    key: 1,
    title: "Estudar TS",
    checked: false
  }
];
