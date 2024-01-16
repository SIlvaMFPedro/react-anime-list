import React from "react";
import Category from "../Category/Category";
import Filter from "../Filter/Filter";
import Type from "../Type/Type";

const HeaderSelect = () => {
    <form className="header--select">
        <Type setMenu={() => null} label="Type: "/>
        <Category label="Category: "/>
        <Filter label="Filter: "/>
    </form>
};

export default HeaderSelect;