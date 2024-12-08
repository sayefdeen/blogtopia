import React from 'react';

import { LottieAnimation } from '@/components/empty-posts-animations';

export const EmptySection = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-gray-50 py-8">
      <p>No Blogs</p>
      <LottieAnimation />
    </section>
  );
};
