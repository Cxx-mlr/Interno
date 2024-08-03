"use client";

import React, { HTMLAttributes, HTMLProps, useState } from 'react';
import Image from 'next/image';

import { ImageProps } from 'next/image';

const ImageWithFallback = ({
  fallbackElement,
  ...props
}: {
  fallbackElement: React.ReactNode,
} & ImageProps ) => {
  const [useFallback, setUseFallback] = useState(false);

  if (useFallback) {
    return fallbackElement;
  }

  return (
    <Image {...props} onError={() => setUseFallback(true)} />
  );
};

export default ImageWithFallback;