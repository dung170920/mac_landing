import React from 'react'
import { Button } from '../ui/button'
import { faqs } from '@/mock/data'
import Collapse from '../ui/collaspe'

const FAQ = () => {
  return (
    <div className="bg-white rounded-lg m-4 px-4 sm:px-6 md:px-10 xl:px-20 py-10 xl:py-16">
      <div className="container flex flex-col lg:flex-row gap-12 lg:gap-24">
        {/* Left Side */}
        <div className="space-y-8 lg:space-y-12 lg:max-w-xl flex-1">
          <h2 className="fs-4xl font-semibold text-center lg:text-left">
            Digital Marketing FAQs
          </h2>
          <p className="text-gray-500 text-center lg:text-left">
            As a leading digital marketing agency, we are dedicated to providing comprehensive educational resources and answering frequently asked questions to help our clients.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <Button variant="outline" color="dark" href="#">
              More Questions
            </Button>
            <Button variant="link" color="dark" href="#">
              Contact Us
            </Button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1">
          {faqs.map((item, index) => (
            <Collapse contentClassName='max-sm:pt-3' key={item.question} title={item.question} defaultOpen={index === 0}>
              <p>{item.answer}</p>
            </Collapse>
          ))}
        </div>
      </div>
    </div>
  )
}

export default FAQ
