export default function Input( { label, textarea, ...args} )
{
    return (
        <p className="flex flex-col gap-1 my-4">
            <label>{label}</label>
            { textarea ? <textarea {...args}/> : <input {...args} /> }
        </p>
    )
}