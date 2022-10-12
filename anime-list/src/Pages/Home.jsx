import React, { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearFilter } from "../Store/action";
import PortraitCarousel from "../Components/PortraitCarousel";
import LandscapeCarousel from "../Components/LandscapeCarousel";
import { endPoints } from "../API/endpoints";

export default function Home() {

    const filter = useSelector((state) => state.clearFilter);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearFilter(!filter));
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Fragment>
            <LandscapeCarousel endPoint={endPoints.airingToday()}/>
            <PortraitCarousel endPoint={endPoints.topAiring()}/>
            <PortraitCarousel endPoint={endPoints.upcoming()}/>
        </Fragment>
    );
}