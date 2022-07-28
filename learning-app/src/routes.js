import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';


import Contato from './pages/Contato';
import Empresa from './pages/Empresa';
import Home from './pages/Home';

export default function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/empresa' element={<Empresa/>}/>
            <Route path='/contato' element={<Contato/>}/>
        </Routes>

    );
}