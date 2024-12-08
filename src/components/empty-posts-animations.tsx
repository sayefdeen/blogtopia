'use client';

import { useEffect, useState } from 'react';
import ReactLottie from 'react-lottie';

export const LottieAnimation = () => {
  const [animationData, setAnimationData] = useState<object>();

  useEffect(() => {
    (async () => {
      const response = await fetch('/animations/empty-blogs.json');
      const data = await response.json();
      setAnimationData(data);
    })();
  }, []);

  return (
    <ReactLottie
      options={{
        animationData,
        loop: true,
        autoplay: true,
      }}
      style={{
        height: '50vh',
      }}
      isClickToPauseDisabled
      isStopped={false}
    />
  );
};
