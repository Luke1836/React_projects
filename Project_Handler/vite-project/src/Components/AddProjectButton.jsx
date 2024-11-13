export default function AddProjectButton({ children, ...props })
{
    return (
        <button className='md:px-4 px-2 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-200 hover:text-stone-200 hover:bg-stone-600 active:text-stone-50' {...props}>
            { children }
        </button>
    )
}