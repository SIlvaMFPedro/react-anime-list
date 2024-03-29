import React from "react";
import Category from "../Category/Category";
import Filter from "../Filter/Filter";
import Type from "../Type/Type";

function HeaderSelect(){

    return (
        <form className="header--select">
            <Type setMenu={() => null} label="Type: "/>
            <Category label="Category: "/>
            <Filter label="Order: "/>
        </form>
    );
    
};

export default HeaderSelect;