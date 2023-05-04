import "../src/styles/main.scss";

import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Portal from "./Portal";
import About from "./companents/About";
import Application from "./companents/Application";
import Info from "./companents/Info";
import Contact from "./companents/Contact";
import SignIn from "./SingIn";
import SingUp from "./SignUp";
import PasswordUpdate from "./PasswordUpdate";

import { Toaster } from "react-hot-toast";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <>
      <div className="App">
        <Toaster />

        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SingUp />} />
          <Route path="/portal" element={<Portal />} />
          <Route path="/portal/passwordUpdate" element={<PasswordUpdate />} />
          <Route path="/portal/about" element={<About />} />
          <Route path="/portal/application" element={<Application />} />
          <Route path="/portal/Info" element={<Info />} />
          <Route path="/portal/contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
