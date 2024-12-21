import LogoImg from "../assets/quiz-logo.png";

function Header()
{
    return (
        <header>
            <img src={ LogoImg } alt="Logo" />
            <h1>Quiz Breaker</h1>
        </header>
    )
}

export default Header;