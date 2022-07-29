import React from 'react';
import {Route, Routes } from 'react-router-dom';

import ListadePessoas from './components/ListadePessoas';
import Condicional from './components/Condicional';
import Form from './components/Form';
import Evento from './components/Evento';
import List from './components/list';

import Home from './pages/Home';

export default function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Condicional' element={<Condicional/>}/>
            <Route path='/form' element={<Form/>}/>
            <Route path='/Evento' element={<Evento numero={1}/>}/>
            <Route path='/ListadePessoas' element={<ListadePessoas/>}/>
            <Route path='/List' element={<List />}/>
        </Routes>

    );
}