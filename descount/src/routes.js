import React from 'react';
import {Routes,Route} from "react-router-dom";
  
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import OptimizeRoute from './components/pages/OptimizeRoute';
import Customers from './components/pages/Customers';


export default function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/OptimizeRoute' element={<OptimizeRoute/>}/>
            <Route path='/Customers' element={<Customers/>}/>
            <Route path='/Company' element={<Company/>}/>
            <Route path='/Contact' element={<Contact/>}/>
        </Routes>

    );
}