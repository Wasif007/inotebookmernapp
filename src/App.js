import Navbar from "./Components/Navbar";
import './App.css';
import About from "./Components/About";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CreateContextExpFunction from "./context/routes/notestate";
import Alert from "./Components/Alert";
import Login from "./Components/LoggingIn";
import Signup from "./Components/Signup";
import { useState } from "react";
function App() {

  const [alert,setAlert]= useState(null);
  const settingAlert=(message,type)=>{
    setAlert({
      message:message,
      type:type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  return (
    <>
     <Router>
    <CreateContextExpFunction settingAlert={settingAlert}>
    
          <Navbar /> 
          <Alert alert={alert}/>
           <div className="container">
        
          <Routes>
            <Route
              path="/"
              element={<Home  settingAlert={settingAlert} exact/>}
            />
            <Route
              path="/about"
              element={ <About exact/>
              }
            />
            <Route
              path="/login"
              element={ <Login settingAlert={settingAlert} exact/>
              }
            />
            <Route
              path="/signup"
              element={ <Signup settingAlert={settingAlert} exact/>
              }
            />
            </Routes>
            </div>
       
        </CreateContextExpFunction>
  </Router>
    </>
  );
}

export default App;
