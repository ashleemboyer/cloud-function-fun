import React, { useState } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

export default () => {
  const [imageRef, setImageRef] = useState()

  const container = (
    <p style={{ margin: 12, padding: 12, color: '#616161' }}>
      This is some text.
    </p>
  )
  const anchor = <a href={imageRef}>Open the image</a>

  const getResult = () => {
    return fetch(
      `/.netlify/functions/myfunction?container=${encodeURIComponent(
        renderToStaticMarkup(container)
      )}`
    ).then(response => {
      return response.text()
    })
  }

  return (
    <>
      {container}
      <button
        onClick={() => {
          getResult().then(response => {
            setImageRef(response)
          })
        }}
      >
        Run a function!
      </button>
      {imageRef && anchor}
    </>
  )
}
