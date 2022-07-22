import React from 'react'
import Item from './item'

export default function List() {
  return (
    <div className="ContainerList">
        <h1>Minha Lista</h1>
        <ul>
            <Item marca={"Renault"} ano_lancamento={1899}/>
            <Item marca={"Fiat"} ano_lancamento={1899}/>
            <Item marca={"Chevrolet"} ano_lancamento={1911}/>
            <Item marca={"Volkswagen"} ano_lancamento={1937}/>
            <Item />
        </ul>
    </div>
  )
}
