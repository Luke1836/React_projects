function Header()
{
    return (
        <header className="flex flex-row flex-nowrap justify-between items-center text-slate-300 lg:w-12/13 m-auto p-2 border-b-2 border-b-slate-800">
            <div className="flex-none flex flex-row items-center gap-4">
                <img className="size-12 m-3 ml-12 inline" src="../src/assets/tailwindcss.png" alt="Tailwindcss logo" />
                <h1 className="text-3xl md:text-xl inline">The Styling Kings</h1>
            </div>
            <dl className="flex-none text-xl font-title">
                <dd className="inline me-12 cursor-pointer">Home</dd>
                <dd className="inline me-12 cursor-pointer">About</dd>
                <dd className="inline me-12 cursor-pointer">Components</dd>
                <dd className="inline me-12 cursor-pointer">Projects</dd>
            </dl>
        </header>
    )
}

export default Header;