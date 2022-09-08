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
    .links > li > a {
      text-decoration: none;
      color: #838383;
      margin: 0.1em;
      padding: 0.5em;
      border-radius: 0.3em;
      font-weight: bold;
      transition: box-shadow 300ms ease-in-out, color 300ms ease-in-out;

      &:hover {
        color:white;
        box-shadow: 0 0 40px 40px #0055a9 inset;
      }

    img {
      margin: 0.2em;
      margin-left: 1em;
    }
  }
  `;

  const ContainerFundo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 5em;
    margin: 0;
    padding: 1em;
    background: #41444d;
    min-height: 1em;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    .logo {
      margin: 0.5em 1em 0em 0em;
    }
    .Sair:hover {
      background: none;
    }
    .botaoSair {
      background-color: transparent;
      border: 2px solid #e74c3c;
      border-radius: 0;
      color: #e74c3c;
      font-size: 0.8rem;
      font-weight: 400;
      line-height: 1;
      margin: 20px;
      padding: 1em 2em;
      text-decoration: none;
      text-align: center;
      text-transform: uppercase;
      font-family:sans-serif;
      font-weight: 700;

      border-color: #8e44ad;
      color: #8e44ad;
      position: relative;
      overflow: hidden;
      z-index: 1;
      transition: color 150ms ease-in-out;

      &:hover {
        color: #fff;
      }
      &:after {
        content: "";
        position: absolute;
        display: block;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 0;
        height: 100%;
        background: #8e44ad;
        z-index: -1;
        transition: width 200ms ease-in-out;
      }
      &:hover {
        color: #fff;
      }
      &:hover:after {
        width: 110%;
      }
    }
  `;
  return (
    <ContainerFundo>
      <Link to="/">
        <img className="logo" src={Logo} width="130" />
      </Link>
      <ContainerMenu>
        <ul className="links">
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
        <Usuario />
        <a className="Sair" href="/LoginPage">
          <button className="botaoSair" type="button">
            Sair
          </button>
        </a>
      </ContainerMenu>
    </ContainerFundo>
  );
}
