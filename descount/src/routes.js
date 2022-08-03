import React from 'react';
import {Routes,Route} from "react-router-dom";
  
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';


export default function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Company' element={<Company/>}/>
            <Route path='/Contact' element={<Contact/>}/>
        </Routes>

    );
}