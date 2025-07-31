import React from 'react'
import { Button } from '../ui/button'
import { services } from '@/mock/data'
import { ArrowRightSmall } from 'magicon'

const dotColors = [
  'bg-blue-500',
  'bg-orange-500',
  'bg-purple-500',
]

const Services = () => {
  return (
    <div className='container pt-12 lg:pt-20 pb-20 lg:pb-32'>
      <div className="relative z-10 pb-10 sm:pb-14 lg:pb-16 flex flex-col gap-6 sm:gap-8 lg:gap-10 lg:flex-row lg:items-center lg:justify-between"      >
        <h2 className="fs-4xl font-bold max-w-2xl">
          Digital Marketing & SEO Services That Grow Traffic & Increase Revenue
        </h2>
        <div className="flex flex-col gap-8 justify-center lg:justify-end max-w-xl">
          <p className='text-gray-500 font-medium'>We are the top digital marketing agency for  branding corp. We offer a full range of services to help clients improve their search engine rankings and drive more traffic to their websites.</p>
          <Button
            href="#"
            variant="outline" color={"dark"} className='w-fit'
          >
            See more
          </Button>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
        {services.map((item, index) => (
          <div key={item.title} className="bg-white rounded p-8">
            <div className="flex items-center justify-between gap-4">
              <div className={`rounded-full size-3.5 ${dotColors[index % dotColors.length]}`} />
              <span>{item.readingTime}</span>
            </div>
            <h5 className='fs-2xl font-semibold mt-6'>{item.title}</h5>
            <div className="flex flex-col md:flex-row md:items-center mt-8 sm:mt-12 lg:mt-14 gap-4 sm:gap-6 xl:gap-10">
              <p className='flex-1 font-medium text-gray-500 line-clamp-3'>{item.content}</p>
              <Button color={"dark"} size={"lg"}>
                <ArrowRightSmall />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Services