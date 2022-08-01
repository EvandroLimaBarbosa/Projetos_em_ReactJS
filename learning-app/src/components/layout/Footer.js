import React from 'react'
import styled from "styled-components";

export default function Footer() {
  const Div = styled.div`
  display:flex;
  align-content: flex-end;
  justify-content: end;
  margin: 0;
  padding: 1em;
  background: black;
  min-height: 1em;
`;
  return (
    <Div>
      <p>Evandro</p>
    </Div>
  )
}
