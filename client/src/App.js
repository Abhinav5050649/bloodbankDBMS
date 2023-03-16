import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Login  from "./components/login";
import Signup  from "./components/signup";
import Navbar from "./components/navbar";

/*Routes for normal home page
i) donor login page
ii) receiver login page
*/

function App(){
    return (
      <>
        <Router>
          <Navbar/>
            <div className="App">
              <Routes>
                <Route exact path="/" element={<Login key="login" />}/>
                <Route exact path="/signup" element={<Signup key="signup" />}/>
              </Routes>
            </div>
        </Router>
      </>
    );
}
export default App;