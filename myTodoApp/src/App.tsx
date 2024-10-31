import "./App.css";
import Header from "./Components/Header";
import Boh from "./Components/Boh"

("use client");
import React from "react";

function App() {
  let testo = "ciao";
  let vettore = ['a', 'b', 'c'];
  
  return (
    <>
      <Boh text={testo} vet={vettore} />
      <Header />
    </>
  );
}

export default App;
