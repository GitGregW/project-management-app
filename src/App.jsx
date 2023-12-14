import Toolbar from './assets/components/Toolbar.jsx';

function App() {
  return (
    <div className="grid grid-cols-4 h-screen w-full">
      <Toolbar />
      <section className="space-y-4 mt-20 pt-8 justify-center text-center col-span-3">
        <img src="logo.png" alt="pen and notepad" className="w-16 h-16 mx-auto" />
        <h1 className="text-xl font-bold text-stone-500">No Project Selected</h1>
        <p className="text-stone-400">Select a project or get started with a new one</p>
        <button className="text-stone-400 bg-stone-700 py-2 px-3 mx-auto mt-4 rounded">Create new Project</button>
      </section>
    </div>
  );
}

export default App;
