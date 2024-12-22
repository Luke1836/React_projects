import Logo from "../assets/Logo.png"

function Header()
{
    return (
        <header>
            <img src={ Logo } alt="Logo" loading="lazy" />
            <h2>World Clock</h2>
            <img src={ Logo } alt="Logo" loading="lazy" />
        </header>
    )
}

export default Header;