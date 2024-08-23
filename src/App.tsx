import React, {useEffect} from 'react';
import './App.css';
import AOS from 'aos';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {DefaultLayout} from "./view/common/DefaultLayout/DefaultLayout";
import 'aos/dist/aos.css';

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration in milliseconds
            easing: 'ease-in-out', // Easing function
            once: true, // Whether animation should happen only once
        });
    }, []);

  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/*" Component={DefaultLayout}></Route>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
