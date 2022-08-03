import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function NavBar() {
  const Div = styled.div`
    justify-content: right;
    margin: 0;
    padding: 1em;
    background: #001b3b;
    min-height: 1em;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
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
      color: black;
      margin: 0.1em;
      padding: 0.5em;
      border-radius: 0.3em;
      background: gray;
      &:hover {
        color: white;
        background: gray;
      }
    }
  `;
  return (
    <Div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Company">Company</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
      </ul>
    </Div>
  );
}
