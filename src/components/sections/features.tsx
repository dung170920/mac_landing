"use client"

import { features, featureTags } from '@/mock/data'
import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'

const Features = () => {
  const [currentTag, setCurrentTag] = React.useState<string>('all');

  const filteredFeatures = currentTag !== 'all'
    ? features.filter(f => f.tag === currentTag)
    : features

  return (
    <div className="relative bg-gray-900 mx-4 rounded-lg overflow-hidden">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage: `url("/black-bg.png")`,
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div className="relative z-10 container px-4 py-12 lg:py-20">
        <h2 className="fs-4xl font-bold text-white text-center max-w-4xl mx-auto">
          Real-world examples of how we have helped companies achieve their marketing objectives.
        </h2>

        <div className="flex justify-center items-center flex-wrap gap-4 mt-14 mb-16">
          {featureTags.map(item => (
            <Button key={item.value} variant={currentTag === item.value ? "filled" : "outline"} color={currentTag === item.value ? "primary" : "light"} onClick={() => setCurrentTag(currentTag === item.value ? '' : item.value)}>
              {item.label} [{item.count}]
            </Button>
          ))}
        </div>
      </div>

      {/* Swiper and Featured Image */}
      <div className="relative z-10 w-full px-4 lg:px-10 pb-20 container">
        <div className="flex flex-col lg:flex-row gap-10 items-center overflow-x-auto">
          {/* Static Feature Card */}
          <div className="relative size-[280px] sm:size-[360px] lg:size-[460px] rounded-full overflow-hidden shrink-0 flex items-center justify-center border-[11px] border-white/40">
            <Image
              src={featureTags.find(i => i.value === currentTag)?.image || ''}
              loading='lazy'
              alt=""
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gray-900 opacity-40 z-0" />
            <Button className="z-10 text-lg size-40">See Details</Button>
          </div>

          {/* Swiper */}
          <Swiper
            spaceBetween={56}
            slidesPerView={'auto'}
            centeredSlides={false}
            className="w-full max-w-full"
          >
            {filteredFeatures.map((item) => (
              <SwiperSlide
                key={item.title}
                className="!w-[280px] sm:!w-[360px] lg:!w-[460px]"
              >
                <div className="relative rounded-lg overflow-hidden aspect-square border-[11px] border-white/40">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gray-900 opacity-40 z-0" />
                  <div className="absolute left-8 top-8 flex gap-3 items-center">
                    <div className='h-px w-14 bg-white' />
                    <span className='text-lg font-semibold text-white'>{item.subTitle}</span>
                  </div>
                  <h5 className='text-2xl font-semibold text-white absolute bottom-10 left-8'>{item.title}</h5>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Features
