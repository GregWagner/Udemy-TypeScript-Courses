import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/posts/1';

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response => {
    const todo = response.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

  logTodo(id, title, );
});

const logTodo = (id: number, title: string, completed: boolean): void => {
    console.log(`
      The Todo with ID: ${id}
      Has a title of: ${title}
      Is it finished? ${completed}`
    );
}