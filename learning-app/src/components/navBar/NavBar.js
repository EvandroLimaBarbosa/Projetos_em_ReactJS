import React from "react";
import { BrowserRouter as Router, Route, Routes, Link, Switch } from 'react-router-dom'

export default function NavBar() {
  return (
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
          <li><Link to='/empresa'>Empresa</Link></li>
          <li><Link to='/contato'>Contato</Link></li>
      </ul>
    </div>
  );
}
