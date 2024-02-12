import React from 'react'

const Logo = () => {
  const env = process.env.NEXT_PUBLIC_ENV
  return (
    <h1>{env || ""}</h1>
  )
}

export default Logo