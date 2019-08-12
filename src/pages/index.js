import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

export default () => {
  const container = <p>This is some text.</p>

  return (
    <>
      {container}
      <a
        href={`/.netlify/functions/myfunction?container=${encodeURIComponent(
          renderToStaticMarkup(container)
        )}`}
      >
        Run a function!
      </a>
    </>
  )
}
