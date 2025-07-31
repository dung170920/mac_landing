import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = ({ size = 'md' }: { size?: 'md' | 'lg' }) => {
  const h = size === 'md' ? 32 : 52
  return (
    <Link href={"/"} className='flex items-center gap-2'>
      <Image src={"/logo.svg"} alt='logo' height={h} width={h} />
      <span className={`uppercase font-bold ${size === 'md' ? 'text-2xl' : 'text-4xl'}`}>mac</span>
    </Link>
  )
}

export default Logo