import { useRef } from 'react';

export default function Show({ project, onDeleteProject, onAddTask, onClearTask }) {

  const task = useRef();

  function handleAdd(){
    event.preventDefault();
    onAddTask(project.tasks.length, task.current.value);
    task.current.value = '';
  }

  function handleClear(index){
    event.preventDefault();
    onClearTask(project['tasks'].toSpliced(index, 1));
  }

  function formatDate(dueDate){
    const date = new Date(dueDate);
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  }
  
  return (
    <section className="col-span-3 mt-20 p-8 w-4/6">
      <div className="flex flex-row justify-between">
        <h1 className="text-4xl font-bold text-stone-700">{project.title}</h1>
        <button onClick={onDeleteProject} className="hover:text-red-500">Delete</button>
      </div>

      <p className="mt-1 text-stone-400">{formatDate(project.dueDate)}</p>
      <p className="my-2 text-stone-900">{project.description}</p>

      <hr className="my-4" />

      <h1 className="text-2xl font-bold text-stone-700">Tasks</h1>
      <form className="flex flex-row gap-4 my-4">
        <input ref={task} className="py-1 px-3 w-64 bg-stone-200 rounded" />
        <button onClick={handleAdd}>Add Task</button>
      </form>
      {project.tasks.length > 0 && <div className="my-8 py-8 px-4 bg-stone-100 rounded-sm">
        { project.tasks.map((task, index) => {
            return (
              <div key={index} className="flex flex-row justify-between py-2">
                <p>{task}</p>
                <button onClick={() => handleClear(index)} className="hover:text-red-500">Clear</button>
              </div>
            );
          })
        }
      </div>}
    </section>
  );
}
