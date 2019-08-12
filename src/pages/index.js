import React from 'react'

export default () => {
  const container = <p>This is some text.</p>

  return (
    <>
      {container}
      <a
        href={`/.netlify/functions/myfunction?container=${encodeURIComponent(
          container
        )}`}
      >
        Run a function!
      </a>
    </>
  )
}
