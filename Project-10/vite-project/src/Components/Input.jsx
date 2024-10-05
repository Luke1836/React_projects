export default function Input( { label, textarea, ...args} )
{
    return (
        <p className="flex flex-col gap-1 my-4">
            <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
            { textarea ? 
                    <textarea {...args} className="pl-2 bg-stone-300 rounded-md h-[8rem] border-2 focus:outline-none focus:border-stone-800"/> 
                    : 
                    <input {...args} className="pl-2 bg-stone-300 rounded-md h-[2rem] focus:outline-none border-2 focus:border-stone-800" /> }
        </p>
    )
}