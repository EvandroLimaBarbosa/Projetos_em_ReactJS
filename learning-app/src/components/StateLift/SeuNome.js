import React, { useState } from 'react'

export default function SeuNome({setNome}) {
    return (
    <div>
        <p>Digite Seu Nome:</p>
        <input type="text" placeholder="Digite Seu Nome" onChange={(e) => setNome(e.target.value)}></input>
    </div>
  )
}
