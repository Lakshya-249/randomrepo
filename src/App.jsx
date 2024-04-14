import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const word = import.meta.env.VITE_BASE_URL;

  return <div>{word}</div>;
}

export default App;
