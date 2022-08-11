import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import IconeUsuario from "../../img/person-icon.png";
import Logo from "../../img/Logo Transparente Branca 1.png";
import Usuario from "../functions/Usuario";

export default function NavBar() {
  const ContainerMenu = styled.div`
    background-color: white;
    height: 3.5em;
    padding: 1em 2em 1em 1em;

    display: flex;
    align-items: center;
    margin-right: 1em;
    flex-wrap: nowrap;
    justify-content: right;
    align-content: center;
    border-radius: 0.4em;
    ul {
      display: flex;
      flex-direction: row;
      justify-content: right;
    }
    li {
      margin: 0;
      padding: 0;
      list-style: none;
    }
    a {
      text-decoration: none;
      color: #838383;
      margin: 0.1em;
      padding: 0.5em;
      border-radius: 0.3em;
      font-weight: bold;

      &:hover {
        color: white;
        background: #003b95;
      }
    }
    img {
      margin: .2em;
      margin-left: 1em;
    }
  `;

  const ContainerFundo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
    height: 5em;
    margin: 0;
    padding: 1em;
    background: #41444d;
    min-height: 1em;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    .logo {
      margin: .5em 1em 0em 0em;
    }
    .Sair{
      text-decoration: none;
      color: #838383;
      margin: 0.2em;
      padding: 0.5em;
      border-radius: 0.3em;
      font-weight: bold;

      &:hover {
        background:none;
    }
  }
  `;
  return (
    <ContainerFundo>
      <Link to='/'><img className="logo" src={Logo} width="130"/></Link>
      <ContainerMenu>
        <ul>
          <li>
            <Link to="/Home">Home</Link>
          </li>
          <li>
            <Link to="/Home/OptimizeRoute">Optimize Route</Link>
          </li>
          <li>
            <Link to="/Home/Customers">Customers</Link>
          </li>
          <li>
            <Link to="/Home/Company">Company</Link>
          </li>
          <li>
            <Link to="/Home/Contact">Contact</Link>
          </li>
        </ul>
        <img src={IconeUsuario} width="25" height="25" />
        <Usuario/>
        <Link to="/LoginPage">Contact</Link>
        <a className="Sair" href="/LoginPage">
        <button type="button">Sair</button></a>
      </ContainerMenu>
    </ContainerFundo>
  );
}
