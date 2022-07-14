import React from 'react'

export default function Evento({numero}) {
    function meuEvento() {
        console.log(`Opa, você apertou o numero ${numero}`)
    }

  return (
    <div>
        <button onClick={meuEvento}>Numero {numero}</button>
    </div>
  )
}
