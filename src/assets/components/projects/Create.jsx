import { useRef } from 'react';
import Input from '../Input.jsx';

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
      <Input ref={title} type="text" label="Title" />
      <Input ref={description} type="textarea" label="Description" />
      <Input ref={dueDate} type="date" label="Due Date" />
    </form>
  );
}
