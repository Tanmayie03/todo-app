import { useState } from "react";

export function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="bg-white p-6 text-center rounded mx-auto w-1/3">
      <h1 className=" text-blue-400 text-lg font-semibold">Add a todo list</h1>
      <input
        type="text"
        className="p-2 my-2  outline-none w-full  rounded bg-slate-100 placeholder-zinc-800"
        placeholder="Title"
        onChange={function (e) {
          const value = e.target.value;
          setTitle(e.target.value);
        }}></input>
      <br />
      <input
        type="text"
        className="p-2 my-2 outline-none w-full  rounded bg-slate-100 placeholder-zinc-800"
        placeholder="Description"
        onChange={function (e) {
          const value = e.target.value;
          setDescription(e.target.value);
        }}></input>
      <br />
      <button
        className="p-2 my-2 bg-blue-400 text-white text-center font-semibold rounded"
        onClick={() => {
          fetch("http://localhost:3000/todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-type": "application/json",
            },
          }).then(async function (res) {
            const json = await res.json();
            alert("Todo added");
          });
        }}>
        Add a todo
      </button>
    </div>
  );
}
