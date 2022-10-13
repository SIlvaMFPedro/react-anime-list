import React, { Fragment, lazy, Suspense, useRef } from "react";
import { Routes, Route } from 'react-router-dom';
import ErrorBoundary from '../Components/ErrorBoundary';

import styles from "../Styles/Pages/MainContent.module.scss";

const Home = lazy(() => import("./Home"));
const Listing = lazy(() => import("./Listing"));
const Error = lazy(() => import("./Error"));
const Anime = lazy(() => import("./Anime"));

export default function MainContent() {

    const scrollRef = useRef(null);

    function setVerticalScroll(value) {
        scrollRef.current.scrollTop = value;
    }

    return (
        <Fragment>
          <div ref={scrollRef} className={styles.mainContent}>
            <ErrorBoundary>
              <Suspense fallback={null} >
                <Routes>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route path="/anime/:id">
                    <Anime setVerticalScroll={setVerticalScroll} />
                  </Route>
                  <Route path="/listing/:id">
                    <Listing />
                  </Route>
                  <Route path="*">
                    <Error />
                  </Route>
                </Routes>
              </Suspense>
            </ErrorBoundary>
          </div>
        </Fragment>
      );
}
