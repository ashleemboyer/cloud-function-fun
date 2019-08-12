import React from 'react'

export default () => {
  const container = (
    <>
      <p>This is some text.</p>
      <a href={`/.netlify/functions/myfunction?container=${container}`}>
        Run a function!
      </a>
    </>
  )

  return container
}
