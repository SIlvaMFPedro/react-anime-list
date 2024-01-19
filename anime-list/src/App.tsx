import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import AnimeDetail from "./components/AnimeDetail/AnimeDetail";

function App(){
  return (
    <div className="App">
      <header>
        <Header/>
      </header>
      <main>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="details/:title/:id" element={<AnimeDetail/>} />
        </Routes>
      </main>
    </div>
  );
}

export default App;