import React from 'react'
import { Button } from '../ui/button'
import { ArrowRightSmall, TrendUp } from 'magicon'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='container lg:pt-14 lg:pb-16 pt-7 pb-8 flex flex-col lg:flex-row gap-2.5'>
      <div className="flex flex-col gap-8 justify-between shrink-0 mb-16 lg:mb-0">
        <div className="xl:space-y-12 space-y-8 xl:max-w-2xl lg:max-w-md">
          <h1 className='fs-5xl font-bold leading-[1.1]'>Stay ahead of the curve with our forward-thinking </h1>
          <p className='text-gray-500 xl:max-w-xl lg:max-w-md'>An award-winning SEO agency with disciplines in digital marketing, design, and website development. focused on understanding you.</p>
          <div className="flex items-center max-sm:flex-col gap-10">
            <Button color={"dark"} icon={<ArrowRightSmall />} iconPosition='end' size={"lg"}>Schedule Call</Button>
            <Button variant={"link"} color={"dark"} size={"lg"}>View Case Study</Button>
          </div>
        </div>
        <div className="flex flex-col xl:flex-row xl:items-center xl:gap-16 gap-6">
          <span className='font-semibold text-sm inline-block xl:max-w-[150px]'>Trusted by the world&rsquo;s biggest brands</span>
          <div className="flex gap-6 items-center flex-wrap">
            <Image src="/afterpay.png" alt="afterpay" height={32} width={1000} className="h-8 w-auto" />
            <Image src="/basecamp.png" alt="basecamp" height={32} width={1000} className="h-8 w-auto" />
            <Image src="/maze.png" alt="maze" height={32} width={1000} className="h-8 w-auto" />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-6">
        <div className="relative min-h-[250px]">
          <div className="rounded h-full w-full overflow-hidden relative">
            <Image
              src="https://images.unsplash.com/photo-1542744095-291d1f67b221?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              fill
              className="object-cover rounded-tl-full"
            />
          </div>
          <div className="absolute top-0 -translate-y-1/2 right-4 text-primary rounded-full bg-gray-900 flex items-center justify-center size-20 xl:size-28 shadow-[0_30px_50px_rgba(0,0,0,.44)]">
            <TrendUp variant="filled" className='lg:size-11 size-6' />
          </div>
        </div>
        <div className="bg-gray-200 rounded py-10 px-6 flex flex-col justify-between gap-4">
          <h4 className='font-bold fs-6xl leading-none'>230+</h4>
          <p className='text-gray-500 font-medium'>Some big companies that we work with, and trust us very much</p>
          <div className="bg-gray-300 w-full relative h-1.5">
            <div className="absolute bg-gray-800 left-0 w-2/3 h-full"></div>
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 row-span-2 rounded text-white bg-gray-900 relative ">
          <div
            className="absolute inset-0 bg-cover bg-right opacity-60 rounded"
            style={{
              backgroundImage: `url("/black-bg.png")`,
              zIndex: 0,
            }}
          />
          <div className="relative flex max-sm:flex-col gap-6 pt-12 px-8 h-full">
            <div className="xl:space-y-8 space-y-6 flex-1">
              <div className="flex gap-3 items-center">
                <div className='h-px w-14 bg-white' />
                <span className='text-sm font-semibold text-white'>Drive More Traffic and Sales </span>
              </div>
              <h3 className='font-bold fs-3xl'>Drive more traffic and product sales </h3>
            </div>
            <div className="h-full flex items-end justify-end flex-1">
              <Image src={"/chart.png"} alt='' height={500} width={500} className='w-full h-2/3' />
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Hero