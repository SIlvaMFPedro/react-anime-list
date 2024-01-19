import React from "react";
// @ts-expect-error TS(2307) FIXME: Cannot find module '../../assets/images/logo-linke... Remove this comment to see the full error message
import { ReactComponent as LinkedinLogo} from "../../assets/images/logo-linkedin.svg";

// @ts-expect-error TS(2307) FIXME: Cannot find module '../../assets/images/logo-githu... Remove this comment to see the full error message
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