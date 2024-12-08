'use client';

import Image from 'next/image';
import type { FC } from 'react';
import React from 'react';

export const AuthBackground: FC = () => {

  return (
    <div className="bg-dark-900 hidden w-1/2 items-center justify-center text-white md:flex">
      <Image src="/background.jpg" alt="Door Box" className="h-full w-full" width={500} height={1000} />
      <div className="absolute bottom-6 px-4">
        <h1 className="mb-4 text-4xl font-bold text-black">Blogtopia - Where Stories and Insights Come Alive</h1>
        <p className="mb-6 text-lg text-black">Dive into a world of compelling stories, expert tips, and fresh ideas on Blogtopia. Your daily dose of inspiration and knowledge awaits.</p>
      </div>
    </div>
  );
};
