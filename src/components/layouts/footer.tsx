import React from 'react'
import Logo from '../ui/logo'
import { Button } from '../ui/button'
import { footerLinks, socialLinks } from '@/constants/navigation'
import { Envelope, LocationPin, Phone } from 'magicon'

const Footer = () => {
  return (
    <footer className='container xl:pb-16 xl:pt-20 pb-8 pt-10'>
      <div className="grid xl:grid-cols-5 md:grid-cols-2 grid-cols-1 gap-8 xl:gap-24">
        <div className="space-y-8 md:col-span-2 col-span-1">
          <Logo size='lg' />
          <p className='text-gray-500'>We offers a comprehensive suite of digital marketing services that cover all aspects of our online presence. From SEO and social media marketing to content creation and PPC advertising, they have the expertise and resources to handle our diverse marketing needs.</p>
          <div className="flex gap-3">
            {socialLinks.map(item => (
              <Button color={"light"} href={item.href} key={item.label} icon={<item.icon />} />
            ))}
          </div>
        </div>
        {footerLinks.map(item => (
          <div className='xl:space-y-10 space-y-6' key={item.label}>
            <h5 className='font-semibold text-lg'>{item.label}</h5>
            <ul className='font-medium text-gray-500'>
              {item.items.map(i => (
                <li key={i.title}>
                  <Button variant={"text"} color={"dark"} href={i.href} className='text-inherit'>{i.title}</Button>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className='xl:space-y-10 space-y-6'>
          <h5 className='font-semibold text-lg'>Contact</h5>
          <ul>
            <li className='flex items-center gap-1.5'>
              <Button variant={"text"} color={"dark"}>
                <Phone variant='filled' className='flex-shrink-0' />
                <span className='text-gray-500'>(406) 555-0120</span>
              </Button>
            </li>
            <li className='flex items-center gap-1.5'>
              <Button variant={"text"} color={"dark"}>
                <Envelope variant='filled' className='flex-shrink-0' />
                <span className='text-gray-500'>Hey@boostim.com</span>
              </Button>
            </li>
            <li className='flex items-center gap-1.5'>
              <Button variant={"text"} color={"dark"}>
                <LocationPin variant='filled' className='flex-shrink-0' />
                <span className='text-gray-500 text-wrap text-left'>2972 Westheimer Rd. Santa Ana, Illinois 85486 </span>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer