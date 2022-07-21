import React from 'react'

export default function Button({text, event}) {
  return <button onClick={event}>{text}</button>
}
