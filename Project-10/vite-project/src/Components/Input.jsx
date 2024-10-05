import { forwardRef } from "react";

const Input = forwardRef(function Input( { label, textarea, ...args}, ref )
{
    const styles = "pl-2 bg-stone-300 rounded-md border-b-2 focus:outline-none focus:border-stone-800";
    return (
        <p className="flex flex-col gap-1 my-4">
            <label className="text-sm font-bold uppercase text-stone-500">{label}</label>

            { textarea ? 
                    <textarea {...args} className={`${styles} h-[6rem]`} ref={ref} /> 
                    : 
                    <input {...args} className={`${styles} h-[2rem]`} ref={ref} /> 
            }
        </p>
    )
});

export default Input;