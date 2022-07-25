import React, { useState } from 'react'

export default function SeuNome({setNome}) {
    return (
      <div className="ContainerList">
        <p>Digite Seu Nome:</p>
        <input style={{}} placeholder="Digite Seu Nome" onChange={(e) => setNome(e.target.value)}></input>
    </div>
  )
}
