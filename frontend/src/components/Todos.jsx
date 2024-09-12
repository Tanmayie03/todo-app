export function Todos({ todos }) {
  return (
    <div className="mt-12">
      {todos.map(function (todo) {
        return (
          <div key={todo._id} className="bg-white rounded py-2 px-4 my-2">
            <div className="flex items-center justify-between">
              <div className="">
                <h2 className="font-bold text-lg">{todo.title}</h2>
                <h2 className="">{todo.description}</h2>
              </div>
              <button
                className={
                  todo.completed
                    ? " bg-green-300 h-fit text-green-600 font-medium p-2 rounded"
                    : "bg-blue-400 h-fit text-white font-medium  p-2 rounded"
                }
                onClick={() => {
                  fetch("http://localhost:3000/completed", {
                    method: "PUT",
                    body: JSON.stringify({
                      id: todo._id,
                      completed: true,
                    }),
                    headers: {
                      "Content-Type": "application/json",
                    },
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      alert(data.msg);
                    })
                    .catch((error) => {
                      console.error("Error:", error);
                    });
                }}>
                {todo.completed ? "Completed" : "Mark as Completed"}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
