import { ReactComponent as LinkedinLogo} from "../../assets/images/logo-linkedin.svg";
import { ReactComponent as GithubLogo} from "../../assets/images/logo-github.svg";
import './SocialMedia.css';

export const SocialMedia = () => {
    return (
        <div className="social--media">
            <a href="https://www.linkedin.com/in/pedro-silva-696ba8171/">
                <LinkedinLogo/>
            </a>
            <a href="https://github.com/SIlvaMFPedro">
                <GithubLogo/>
            </a>
        </div>
    );
};