'use client'
import Image from 'next/image'
import React from 'react'

function Phone() {
    const imageWidth = 510; // Largura da imagem do telefone
    const imageHeight = 720;
  
    const videoScale = 0.92;
  
    const videoWidth = `${videoScale * 100}%`;
    const videoHeight = `${videoScale * 100}%`;
  
    return (
      <div className="mx-auto mt-28">
        <div className="relative pb-[100%] lg:pb-[80%] max-w-[110%] sm:max-w-[200%]">
          <video
            className="absolute inset-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            autoPlay
            loop
            muted
            style={{ width: videoWidth, height: videoHeight }}
          >
            <source src="/midia/video.mp4" type="video/mp4" />
          </video>
          <Image
            src="/midia/phone.png"
            width={imageWidth}
            height={imageHeight}
            className="absolute inset-0 w-full h-full object-contain"
            alt="Phone Model"
          />
        </div>
      </div>
    );
  }

export default Phone