import React, { useState, useEffect } from "react";

import styled from "styled-components";

import PropTypes from "prop-types";

const Container = styled.div`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    z-index: 1;
    background: #1da1f2;
    transform: translate(-20px, 20px);
  }
`;

const TodoWrapper = styled.div`
  position: relative;
  background-color: #e2e2e2;
  color: #333;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  z-index: 2;
`;

const TodoTitle = styled.h2`
  display: inline-block;

  ${({ checked }) => checked && "text-decoration: line-through"}
`;

const TodoCheckbox = styled.input.attrs({
  type: "checkbox"
})`
  width: 30px;
  height: 30px;
  cursor: pointer;
`;

function TodoPropTypes(props) {
  const [todos, setTodos] = useState([]);

  const { todos: propTodos } = props;

  useEffect(() => setTodos(propTodos), [propTodos]);

  const handleCheck = key => {
    const newTodos = todos.map(todo =>
      todo.key === key ? { ...todo, checked: !todo.checked } : todo
    );

    setTodos(newTodos);
  };

  return (
    <Container>
      {todos.map(({ title, checked, key }) => (
        <TodoWrapper key={key}>
          <TodoCheckbox onClick={() => handleCheck(key)} />
          <TodoTitle checked={checked}>{title}</TodoTitle>
        </TodoWrapper>
      ))}
    </Container>
  );
}

TodoPropTypes.propTypes = {
  todos: PropTypes.shape({
    key: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    checked: PropTypes.bool.isRequired
  })
};

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
