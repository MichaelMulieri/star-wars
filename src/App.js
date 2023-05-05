// import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchResources from "./components/SearchResources";
import PlanetComponent from "./components/PlanetComponent";
import PeopleComponent from "./components/PoepleComponent";
import StarshipsComponent from "./components/StarshipsComponent";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <SearchResources />
        <Routes>
          <Route path="/people/:id" element={<PeopleComponent />} />
          <Route path="/planets/:id" element={<PlanetComponent />} />
          <Route path="/starships/:id" element={<StarshipsComponent />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
