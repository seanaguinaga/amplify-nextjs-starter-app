// app/page.tsx

import { cookiesClient } from "@/utils/amplify-utils";

async function App() {
  const { data: todos } = await cookiesClient.models.Todo.list();

  return (
    <>
      <h1>Hello, Amplify 👋</h1>
      <ul>
        {todos && todos.map((todo) => <li key={todo.id}>{todo.content}</li>)}
      </ul>
    </>
  );
}

export default App;
