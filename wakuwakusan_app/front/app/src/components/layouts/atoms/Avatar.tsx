import Image from 'next/image'
import React from 'react'

const Avatar = () => {
  return (
    <div><Image src="/avatar.png" alt="avatar_sample" width={50} height={50} /></div>
  )
}

export default Avatar
