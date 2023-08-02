import Navbar from "./Components/Navbar";
import './App.css';
import About from "./Components/About";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateContextExpFunction from "./context/routes/notestate";
import Alert from "./Components/Alert";
import Login from "./Components/LoggingIn";
import Signup from "./Components/Signup";
function App() {
  return (
    <>
    <CreateContextExpFunction>
     <Router>
          <Navbar /> 
           <Alert/>
           <div className="container">
        
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
            <Route
              path="/login"
              element={ <Login exact/>
              }
            />
            <Route
              path="/signup"
              element={ <Signup exact/>
              }
            />
            </Routes>
            </div>
        </Router>
        </CreateContextExpFunction>
 
    </>
  );
}

export default App;
