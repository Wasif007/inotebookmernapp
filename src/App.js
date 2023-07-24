import Navbar from "./Components/Navbar";
import './App.css';
import About from "./Components/About";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
     <Router>
          <Navbar /> 
           <div className="App">
          <h1>NOTEBOOK APPLICATION</h1>
          </div>
          <Routes>
            <Route
              path="/"
              element={<Home   exact/>}
            />
            <Route
              path="/about"
              element={ <About exact/>
              }
            />
            </Routes>
        </Router>
 
    </>
  );
}

export default App;
