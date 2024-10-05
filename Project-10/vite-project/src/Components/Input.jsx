export default function Input( { label, textarea, ...args} )
{
    const styles = "pl-2 bg-stone-300 rounded-md border-b-2 focus:outline-none focus:border-stone-800";
    return (
        <p className="flex flex-col gap-1 my-4">
            <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
            { textarea ? 
                    <textarea {...args} className={`${styles} h-[6rem]`} /> 
                    : 
                    <input {...args} className={`${styles} h-[2rem]`} /> }
        </p>
    )
}