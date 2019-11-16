import { Todo } from "./TodoPropTypes";

type AuthorTodo = Pick<Todo, "title"> & {
  author: string;
  authorID: string;
};

const todo: Readonly<AuthorTodo> = {
  title: "Estudar hooks",
  author: "Lucas",
  authorID: "123"
};

// todo.authorID = "456";

type DateTodo = Omit<Todo, "key"> & {
  limitDate: Date;
};

type TodoNonNullable = {
  todos: Todo & {
    title: NonNullable<Todo["title"]>;
  };
};
