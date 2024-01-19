import React from "react";
import PropTypes from 'prop-types';
import { MdClose } from 'react-icons/md';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai';
import Filter from '../Filter/Filter';
import Type from "../Type/Type";
import Category from "../Category/Category";

const MenuSettings = (props) => {
    const { setMenu } = props;

    const closeSettings = (event) => {
        const { parentNode } = event.currentTarget;
        parentNode.style.animation = 'slide-out 0.5s cubic-bezier(0.215, 0.610, 0.355, 1) 0s';
        setTimeout(() => {
            setMenu(false);
        }, 400);
    };

    return (
        <div className="menu--settings">
            <button type="button" onClick={closeSettings}>
                <MdClose stroke="#fff" fill="#fff" strokeWidth="1"/>
            </button>
            <form>
                <Type setMenu={setMenu} label="Anime Type" />
                <Category label="Anime Category"/>
                <Filter label="Anime Filter"/>
            </form>
            <div className="signature">
                <p>Made by Pedro Silva</p>
                <a href="https://github.com/SIlvaMFPedro" target="_blank" rel="noreferrer">
                    <AiFillGithub fill="#e8eaf8" />
                </a>
                <a href="https://twitter.com/SilvaMFPedro" target="_blank" rel="noreferrer">
                    <AiFillTwitterCircle fill="#e8eaf8" />
                </a>
                <a href="https://www.linkedin.com/in/pedro-silva-696ba8171/" target="_blank" rel="noreferrer">
                    <AiFillLinkedin fill="#e8eaf8" />
                </a>
            </div>
        </div>
    );

}

MenuSettings.propTypes = {
    setMenu: PropTypes.func.isRequired,
}

export default MenuSettings;