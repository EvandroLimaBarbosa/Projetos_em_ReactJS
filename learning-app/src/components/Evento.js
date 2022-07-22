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
    <div style={{display: 'flex', justifyContent:'space-around',margin: '2em auto' , padding:'1em' ,backgroundColor: "white", width: "17em", minHeight: "1em"}}>
        <Button event={meuEvento} text="Primeiro Evento"/>
        <Button event={segundoEvento} text="Segundo Evento"/>
    </div>
  )
}
