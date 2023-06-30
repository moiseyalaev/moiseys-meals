import logo from "./logo.svg";
import axios from "axios";
import "./App.css";
import Meals from "./components/meals";
import { useEffect, useState } from "react";

const API_URL = "http://localhost::3001/api/v1/meals";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data);
}

function App() {
  return (
    <div className="App">
      <h1> Hello </h1>{" "}
    </div>
  );
}

export default App;
