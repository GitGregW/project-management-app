import Toolbar from './assets/components/Toolbar.jsx';
import ShowProject from './assets/components/projects/Show.jsx';
import CreateProject from './assets/components/projects/Create.jsx';

import { useState } from 'react';

function App() {

  const [projects, setProjects] = useState([
    {
      title: 'Demo Project',
      dueDate: '2023-12-14',
      description: 'my demo project',
      tasks: [],
    },
  ]);
  const [selectedProject, setSelectedProject] = useState();

  function handleSelectProject(index = undefined){
    setSelectedProject(() => index);
  }

  function handleAddProject(projectForm){
    setProjects(prevProjects => {
      const updatedProjects = [...prevProjects, projectForm]
      return updatedProjects;
    });
  }
  
  function handleDeleteProject(){
    setProjects(prevProjects => prevProjects.toSpliced(selectedProject, 1));
    setSelectedProject(() => undefined);
  }

  function handleAddTask(index, task){
    setProjects(prevProjects => {
      const updatedProjects = [...prevProjects];
      updatedProjects[selectedProject]['tasks'][index] = task;
      return updatedProjects;
    });
  }

  function handleClearTask(newTasksArr){
    setProjects(prevProjects => {
      const updatedProjects = [...prevProjects];
      updatedProjects[selectedProject]['tasks'] = newTasksArr;
      return updatedProjects;
    });
  }

  return (
      <div className="grid grid-cols-4 h-screen w-full">
        <Toolbar projects={projects} onClickProject={handleSelectProject} selectedProject={selectedProject} />
        { selectedProject === undefined &&
          <section className="col-span-3 mt-20 pt-8 space-y-4 justify-center text-center">
            <img src="logo.png" alt="pen and notepad" className="w-16 h-16 mx-auto" />
            <h1 className="text-xl font-bold text-stone-500">No Project Selected</h1>
            <p className="text-stone-400">Select a project or get started with a new one</p>
            <button
              className="text-stone-400 bg-stone-700 py-2 px-3 mx-auto mt-4 rounded"
              onClick={() => handleSelectProject("Add")}>Create new Project</button>
          </section>
        }
        { selectedProject >= 0 && <ShowProject project={projects[selectedProject]} onDeleteProject={handleDeleteProject} onAddTask={handleAddTask} onClearTask={handleClearTask} /> }
        { selectedProject === "Add" && <CreateProject onAddProject={handleAddProject} onCancelProject={handleSelectProject} /> }
      </div>
  );
}

export default App;
