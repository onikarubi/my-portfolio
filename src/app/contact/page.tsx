'use client';

import React from 'react'
import dynamic from 'next/dynamic'

const ContactForm = dynamic(() => import('@/components/contact/ContactForm'), { ssr: false })

const page = () => {
  return (
    <div className='mt-10'>
      <ContactForm />
    </div>
  )
}

export default page