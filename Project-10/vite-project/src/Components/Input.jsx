export default function Input( { label, textarea, ...args} )
{
    return (
        <p>
            <label>{label}</label>
            { textarea ? <textarea {...args}/> : <input {...args} /> }
        </p>
    )
}