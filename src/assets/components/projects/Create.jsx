import { useRef } from 'react';

export default function Create({onAddProject, onCancelProject}) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleForm(){
        event.preventDefault();
        onAddProject({
            title: title.current.value,
            description: description.current.value,
            dueDate: dueDate.current.value,
            tasks: [],
        });
    }

    function handleCancel(){
        event.preventDefault();
        onCancelProject();
    }
    
  return (
    <form className="col-span-3 mt-20 p-8 w-4/6">
      <div className="flex flex-row justify-end gap-2 mb-4">
        <button
            className="text-stone-600 py-2 px-6"
            onClick={(handleCancel)}
            >
            Cancel
        </button>
        <button
            className="text-stone-100 py-2 px-6 bg-black rounded-lg"
            onClick={handleForm}
            >
          Save
        </button>
      </div>
      <label className="text-sm font-bold text-stone-500">TITLE</label>
      <input
       ref={title}
        type="text"
        className="block py-1 px-3 mb-3 w-full bg-stone-200 border-b-2 border-stone-300"
      />
      <label className="text-sm font-bold text-stone-500">DESCRIPTION</label>
      <textarea
       ref={description}
        className="block py-1 px-3 mb-3 w-full bg-stone-200 border-b-2 border-stone-300" />
      <label className="text-sm font-bold text-stone-500">DUE DATE</label>
      <input
       ref={dueDate}
        type="date"
        className="block py-1 px-3 mb-3 w-full bg-stone-200 border-b-2 border-stone-300"
      />
    </form>
  );
}
