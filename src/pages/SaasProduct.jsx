import React from 'react';
import { FaCloud, FaDollarSign, FaPlayCircle } from 'react-icons/fa';
import { MdSecurity } from 'react-icons/md';
import { IoMdSpeedometer } from 'react-icons/io';

export default function Home() {
  return (
    <div className='container mx-auto px-4'>
      <main className='min-h-screen flex flex-col items-center justify-center text-center'>
        <h1 className='text-4xl font-bold mt-10'>Cloud Storage Solutions</h1>
        <p className='mt-3 text-xl'>Secure, reliable, and scalable cloud storage for your data.</p>

        <div className='mt-10'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Sign Up Now</button>
        </div>

        <section className='mt-20'>
          <h2 className='text-3xl font-bold'>Features</h2>
          <div className='flex justify-center items-center gap-10 mt-4'>
            <div className='text-center'>
              <FaCloud className='text-4xl mx-auto' />
              <p className='mt-2'>Unlimited Storage</p>
            </div>
            <div className='text-center'>
              <MdSecurity className='text-4xl mx-auto' />
              <p className='mt-2'>Top-notch Security</p>
            </div>
            <div className='text-center'>
              <IoMdSpeedometer className='text-4xl mx-auto' />
              <p className='mt-2'>High Performance</p>
            </div>
          </div>
        </section>

        <section className='mt-20'>
          <h2 className='text-3xl font-bold'>Pricing Plans</h2>
          <div className='grid grid-cols-3 gap-4 mt-4'>
            <div className='p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md'>
              <FaDollarSign className='text-3xl mx-auto' />
              <h3 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>Basic</h3>
              <p className='mb-3 font-normal text-gray-700'>Ideal for personal use.</p>
              <p className='font-bold'>$5/month</p>
              <button className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Choose Plan</button>
            </div>
            <div className='p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md'>
              <FaDollarSign className='text-3xl mx-auto' />
              <h3 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>Professional</h3>
              <p className='mb-3 font-normal text-gray-700'>For small businesses.</p>
              <p className='font-bold'>$20/month</p>
              <button className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Choose Plan</button>
            </div>
            <div className='p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md'>
              <FaDollarSign className='text-3xl mx-auto' />
              <h3 className='mb-2 text-2xl font-bold tracking-tight text-gray-900'>Enterprise</h3>
              <p className='mb-3 font-normal text-gray-700'>For large enterprises.</p>
              <p className='font-bold'>$100/month</p>
              <button className='mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Choose Plan</button>
            </div>
          </div>
        </section>

        <section className='mt-20'>
          <h2 className='text-3xl font-bold'>Video Walkthrough</h2>
          <div className='mt-4'>
            <FaPlayCircle className='text-6xl mx-auto text-blue-500' />
            <p className='mt-2'>Watch our video to learn more!</p>
          </div>
        </section>
      </main>
    </div>
  );
}