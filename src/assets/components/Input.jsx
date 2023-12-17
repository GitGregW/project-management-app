import { forwardRef } from 'react';

const input = forwardRef(function Input({type, label}, ref){

    const inputFormat = type === 'textarea'
     ? <textarea
        ref={ref}
        type={type}
        className="block py-1 px-3 mb-3 w-full bg-stone-200 border-b-2 border-stone-300"
    />
     : <input
        ref={ref}
        type={type}
        className="block py-1 px-3 mb-3 w-full bg-stone-200 border-b-2 border-stone-300"
    />

    return(
    <>
        <label className="text-sm font-bold text-stone-500 uppercase">{label}</label>
        {inputFormat}
    </>
    );
});

export default input;