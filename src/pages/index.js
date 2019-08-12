import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

export default () => {
  const container = <p>This is some text.</p>

  const getResult = () => {
    return fetch(`/.netlify/functions/myfunction`).then(response => {
      return response.text()
    })
  }

  return (
    <>
      {container}
      <button
        onClick={() => {
          getResult().then(response => {
            console.log('the response is', response)
          })
        }}
      >
        Run a function!
      </button>
    </>
  )
}
