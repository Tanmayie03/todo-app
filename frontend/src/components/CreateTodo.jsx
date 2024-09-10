export function CreateTodo() {
  return (
    <div>
      <input
        type="text"
        style={{
          padding: 10,
          margin: 10,
        }}
        placeholder="title"></input>
      <br />
      <input
        type="text"
        style={{
          padding: 10,
          margin: 10,
        }}
        placeholder="description"></input>
      <br />
      <button
        style={{
          padding: 10,
          margin: 10,
        }}>
        Add a todo
      </button>
    </div>
  );
}
