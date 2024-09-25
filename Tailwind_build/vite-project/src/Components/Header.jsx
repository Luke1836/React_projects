function Header()
{
    return (
        <header className="flex flex-row flex-nowrap justify-between items-center text-slate-300 lg:w-12/13 m-auto p-2 border-b-2 border-b-slate-800">
            <div className="flex-none flex flex-row items-center gap-4">
                <img className="size-12 md:m-1 lg:m-3 lg:ml-12 inline cursor-pointer" src="../src/assets/tailwindcss.png" alt="Tailwindcss logo" />
                <h1 className="lg:text-3xl md:text-xl inline cursor-default">The Styling Kings</h1>
            </div>
            <dl className="hidden md:block text-base lg:text-xl font-title">
                <dd className="inline me-6 lg:me-12 cursor-pointer hover:text-cyan-400">Home</dd>
                <dd className="inline me-6 lg:me-12 cursor-pointer hover:text-cyan-400">About</dd>
                <dd className="inline me-6 lg:me-12 cursor-pointer hover:text-cyan-400">Components</dd>
                <dd className="inline me-6 lg:me-12 cursor-pointer hover:text-cyan-400">Projects</dd>
            </dl>
        </header>
    )
}

export default Header;