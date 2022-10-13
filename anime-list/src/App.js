import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setWindowView } from "./Store/action";
import { getViewType, DESKTOP_VIEW } from './Constants/index';
import Header from "./Components/Header";
import MainContent from "./Pages/MainContent";

import styles from './Styles/App.module.scss';

export default function App() {

  const isMenuOpen = useSelector((state) => state.isMenuOpen);
  const windowViewType = useSelector((state) => state.windowViewType);
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function updateWidth() {
    dispatch(setWindowView(getViewType(window.innerWidth)));
  }

  return (
    <Fragment>
      <Router basename="/react-anime-list">
        <div className={styles.mainSection}>
          <div className={styles.header}>
            <Header/>
          </div>
          <div className={styles.mainContent}>
            <MainContent/>
          </div>
        </div>
      </Router>
    </Fragment>
  );
}