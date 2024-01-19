
// @ts-expect-error TS(2307) FIXME: Cannot find module '../../assets/images/logo-linke... Remove this comment to see the full error message
import { ReactComponent as LinkedinLogo} from "../../assets/images/logo-linkedin.svg";

// @ts-expect-error TS(2307) FIXME: Cannot find module '../../assets/images/logo-githu... Remove this comment to see the full error message
import { ReactComponent as GithubLogo} from "../../assets/images/logo-github.svg";
import './SocialMedia.css';

export const SocialMedia = () => {
    return (

        // @ts-expect-error TS(2686) FIXME: 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
        <div className="social--media">
            // @ts-expect-error TS(2686): 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
            // @ts-expect-error TS(2686) FIXME: 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
            <a href="https://www.linkedin.com/in/pedro-silva-696ba8171/">
                // @ts-expect-error TS(2686): 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
                // @ts-expect-error TS(2686) FIXME: 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
                <LinkedinLogo/>
            </a>
            // @ts-expect-error TS(2686): 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
            // @ts-expect-error TS(2686) FIXME: 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
            <a href="https://github.com/SIlvaMFPedro">
                // @ts-expect-error TS(2686): 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
                // @ts-expect-error TS(2686) FIXME: 'React' refers to a UMD global, but the current fi... Remove this comment to see the full error message
                <GithubLogo/>
            </a>
        </div>
    );
};