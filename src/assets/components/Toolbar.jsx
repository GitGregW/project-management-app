export default function Toolbar({ projects, onClickProject, selectedProject }) {
  return (
    <aside className="flex flex-col gap-8 bg-black mt-12 rounded-tr-2xl px-8 pt-14">
      <h1 className="text-xl font-bold text-white">YOUR PROJECTS</h1>
      <button
        className="text-stone-400 bg-stone-700 py-2 px-3 mr-auto rounded hover:text-stone-100 hover:bg-stone-600"
        onClick={() => onClickProject('Add')}
        >
        + Add Project
      </button>
      <ul className="space-y-2">
        {projects.map((project, index) => {
          return (
            <li
              key={index}
              onClick={() => onClickProject(index)}
              className={`py-1 px-3 hover:text-stone-300 cursor-pointer hover:bg-stone-900 ${selectedProject === index ? 'text-stone-300 bg-stone-900' : 'text-stone-500'}`}
            >
              {project.title}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
