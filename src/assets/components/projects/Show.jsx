import {useState} from 'react';

export default function Show({ project, addTask }) {

  const [task, setTask] = useState();
  
  return (
    <section className="col-span-3 mt-20 p-8 w-4/6">
      <div className="flex flex-row justify-between">
        <h1 className="text-4xl font-bold text-stone-700">{project.title}</h1>
        <button>Delete</button>
      </div>

      {/* NOTE: TO FORMAT AS DEC 14, 2023 */}
      <p className="mt-1 text-stone-400">{project.dueDate}</p>
      <p className="my-2 text-stone-900">{project.description}</p>

      <hr className="my-4" />

      <h1 className="text-2xl font-bold text-stone-700">Tasks</h1>
      <form className="flex flex-row gap-4 my-4">
        <input onChange={() => setTask(() => event.target.value)} className="py-1 px-3 w-64 bg-stone-200 rounded" />
        <button onClick={() => addTask(task)}>Add Task</button>
      </form>
      <div className="my-8 py-8 px-4 bg-stone-100 rounded-sm">
        {project.tasks
          ? project.tasks.map((task, index) => {
              return (
                <div key={index} className="flex flex-row justify-between py-2">
                  <p>{task}</p>
                  <button>Clear</button>
                </div>
              );
            })
          : undefined}
      </div>
    </section>
  );
}
