import React from 'react'
import Item from './item'

export default function List() {
  return (
    <>
        <h1>Minha Lista</h1>
        <ul>
            <Item marca={"Renault"}/>
            <Item marca={"Fiat"}/>
            <Item marca={"Chevrolet"}/>
            <Item marca={"Volkswagen"}/>
        </ul>
    </>
  )
}
