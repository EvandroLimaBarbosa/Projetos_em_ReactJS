import React from 'react'
import Button from './evento/Button'

export default function Evento() {
    function meuEvento() {
        console.log(`Opa, você apertou no botão`)
    }

    function segundoEvento() {
      console.log("Ativei o segundo Evento!")
    }

  return (
    <div>
        <Button event={meuEvento} text="Primeiro Evento"/>
        <Button event={segundoEvento} text="Segundo Evento"/>
    </div>
  )
}
