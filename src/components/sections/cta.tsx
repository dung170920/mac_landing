import React from 'react'
import { Button } from '../ui/button'
import { ArrowRightSmall } from 'magicon'

const CTA = () => {
  return (
    <div className="relative bg-gray-900 mx-4 rounded-lg overflow-hidden">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{
          backgroundImage: `url("/black-bg.png")`,
          zIndex: 0,
        }}
      />

      {/* Content */}
      <div className="relative z-10 container px-4 py-12 lg:py-20 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="fs-6xl font-bold text-white text-center lg:text-left">
          Ready to work with us?
        </h2>
        <div className="flex justify-center lg:justify-end">
          <Button
            href="#"
            color="light"
            icon={<ArrowRightSmall />}
            iconPosition="end"
          >
            Get Started
          </Button>
        </div>
      </div>
    </div>
  )
}

export default CTA
