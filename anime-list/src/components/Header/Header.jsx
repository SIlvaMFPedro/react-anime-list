import { SocialMedia } from "../SocialMedia/SocialMedia";
import './Header.css';

function Header() {
    return (
        <header>
            <h1>
                React<strong>Anime</strong>List
            </h1>
            <SocialMedia/>
        </header>
    );
}

export default Header;