import { useState } from 'react';

export default function Create({onSubmitProject}) {
    const [form, setForm] = useState({
        title: '',
        description: '',
        dueDate: '',
        tasks: [],
    });

    function handleForm(attribute){
        setForm(oldForm => {
            const updatedForm = {...oldForm, [attribute]: event.target.value};
            return updatedForm;
        });
    }
    
  return (
    <form className="col-span-3 mt-20 p-8 w-4/6">
      <div className="flex flex-row justify-end gap-2 mb-4">
        <button className="text-stone-600 py-2 px-6">Cancel</button>
        <button
            className="text-stone-100 py-2 px-6 bg-black rounded-lg"
            onClick={() => onSubmitProject(form)}
            >
          Save
        </button>
      </div>
      <label className="text-sm font-bold text-stone-500">TITLE</label>
      <input
        type="text"
        
        onChange={() => handleForm('title')}
        className="block py-1 px-3 mb-3 w-full bg-stone-200 border-b-2 border-stone-300"
      />
      <label className="text-sm font-bold text-stone-500">DESCRIPTION</label>
      <textarea
        
        onChange={() => handleForm('description')}
        className="block py-1 px-3 mb-3 w-full bg-stone-200 border-b-2 border-stone-300" />
      <label className="text-sm font-bold text-stone-500">DUE DATE</label>
      <input
        type="date"
        
        onChange={() => handleForm('dueDate')}
        className="block py-1 px-3 mb-3 w-full bg-stone-200 border-b-2 border-stone-300"
      />
    </form>
  );
}
