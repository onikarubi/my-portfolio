import React from 'react';
import Image from 'next/image';

const MainVisual = () => {
  return (
    <div className="relative h-screen w-full">
      <Image
        src="/images/main-visual.png"
        layout="fill"
        objectFit="cover"
        alt="メインビジュアル"
        className="opacity-60"
      />
      <div className="absolute inset-0 bg-black opacity-30"></div> {/* 背景の影 */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-6xl font-bold mb-8 text-white animate-fadeInUp">Give shape to your ideas</h1>
        <p className="text-xl text-white mt-2 animate-fadeInUp delay-500">Why don't you make that idea a reality?</p>
      </div>
    </div>
  );
};

export default MainVisual;
