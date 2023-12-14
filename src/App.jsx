import Toolbar from './assets/components/Toolbar.jsx';
import ShowProject from './assets/components/projects/Show.jsx';
import CreateProject from './assets/components/projects/Create.jsx';

import { useState, useRef } from 'react';

function App() {
  const [projects, setProjects] = useState([
    {
      title: 'Demo Project',
      dueDate: '2023-12-14',
      description: 'my demo project',
      tasks: [
        'new task one',
        'new task two',
      ],
    },
  ]);

  const [selectedProject, setSelectedProject] = useState();

  function handleClickProject(index){
    setSelectedProject(() => index);
  }

  function handeSubmitProject(projectForm){
    event.preventDefault();
    setProjects(prevProjects => {
      const updatedProjects = [...prevProjects, projectForm]
      return updatedProjects;
    });
  }

  function handleAddTask(task){
    event.preventDefault();
    setProjects(prevProjects => {
      const updatedProjects = [...prevProjects, projects[selectedProject]['tasks'].push(task)]
      return updatedProjects;
    });
  }

  return (
    <div className="grid grid-cols-4 h-screen w-full">
      <Toolbar projects={projects} onClickProject={handleClickProject} selectedProject={selectedProject} />

      { selectedProject === undefined && 
        <section className="col-span-3 mt-20 pt-8 space-y-4 justify-center text-center">
          <img src="logo.png" alt="pen and notepad" className="w-16 h-16 mx-auto" />
          <h1 className="text-xl font-bold text-stone-500">No Project Selected</h1>
          <p className="text-stone-400">Select a project or get started with a new one</p>
          <button className="text-stone-400 bg-stone-700 py-2 px-3 mx-auto mt-4 rounded">Create new Project</button>
        </section>
      }

      { selectedProject >= 0 && <ShowProject project={projects[selectedProject]} addTask={handleAddTask} /> }
      { selectedProject === "Add" && <CreateProject onSubmitProject={handeSubmitProject} /> }
    </div>
  );
}

export default App;
