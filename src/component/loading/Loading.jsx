import React from 'react'
import { Puff } from  'react-loader-spinner'
export default function Loading() {
  return (
    <div>
      <Puff
  height="80"
  width="80"
  radius={1}
  color="red"
  ariaLabel="puff-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
  </div>
  )
}


