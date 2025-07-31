import { Play } from 'magicon'
import Image from 'next/image'
import React from 'react'

const HowWeWork = () => {
  return (
    <div className='container py-12 lg:py-20'>
      <div className="flex flex-col lg:flex-row justify-between gap-8 mb-16">
        <h2 className='fs-4xl font-bold max-w-2xl'>Provide the best service with out of the box ideas</h2>
        <p className='text-gray-500 font-medium max-w-xl'>We are a passionate team of digital marketing enthusiasts dedicated to helping businesses succeed in the digital world. With years of experience and a deep understanding of the ever-evolving online landscape, we stay at the forefront of industry trends and technologies.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-6">
        <div className="col-span-1 xl:col-span-2 rounded-lg overflow-hidden relative bg-gray-900 min-h-[300px] lg:min-h-[382px]">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{
              backgroundImage: `url("/black-bg.png")`,
              zIndex: 0,
            }}
          />
          <div className="relative h-full p-6 lg:p-10 z-10 flex flex-col justify-between">
            <div>
              <h4 className='text-white font-bold fs-6xl'>920<span className='text-primary'>+</span></h4>
              <p className='text-lg font-medium text-gray-400'>Project finish with superbly</p>
            </div>
            <div className="flex gap-2 items-center flex-wrap">
              {[
                'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=900&auto=format&fit=crop&q=60',
                'https://images.unsplash.com/photo-1654110455429-cf322b40a906?w=900&auto=format&fit=crop&q=60',
                'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=900&auto=format&fit=crop&q=60',
                'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=900&auto=format&fit=crop&q=60'
              ].map((src, i) => (
                <div key={i} className="relative shrink-0 rounded-full overflow-hidden max-sm:size-10 w-[70px] h-[70px]">
                  <Image src={src} alt="" fill className="object-cover" />
                </div>
              ))}
              <span className='text-white font-bold fs-4xl lg:fs-5xl'>+</span>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:col-span-3 rounded-lg relative min-h-[300px] lg:min-h-[382px]" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1543269865-cbf427effbad?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHRlYW0lMjB3b3JrfGVufDB8fDB8fHww")' }}>
          <span className='uppercase text-center text-white fs-4xl font-bold absolute top-1/2 left-1/2 -translate-1/2 tracking-widest'>how we work</span>
          <div className="bg-primary size-24 md:ize-28 xl:size-40 rounded-full border-8 xl:border-12 border-white absolute -right-4 xl:-right-8 -bottom-4 xl:-bottom-8 flex items-center justify-center">
            <Play variant='filled' className='size-8 xl:size-11' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HowWeWork