import React from "react";
import styled from "styled-components";

export default function Footer() {
  const Div = styled.div`
    margin-top: auto;
    padding: 1em;
    background: black;
    min-height: 1em;
    width: 100%;
    position: fixed;
    bottom: 0;
    p {
      margin: auto;
      color: white;
      background: none;
    }
  `;
  return (
    <Div>
      <p>Evandro</p>
    </Div>
  );
}
