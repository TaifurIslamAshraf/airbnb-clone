"use client";

import NextImage, {ImageProps} from "next/image";
import {useState} from "react";

const Image = ({src, ...props}: ImageProps) => {
  const [isReady, setIsReady] = useState(false);

  const onLoadCallback = () => {
    setIsReady(true);
  };

  return (
    <NextImage
      src={src}
      className={`bg-gray-400 transition duration-700 ${
        isReady ? "scale-100 bg-gray-400 blur-0" : "scale-120 blur-md"
      }`}
      {...props}
      onLoadingComplete={onLoadCallback}
      layout="responsive"
    />
  );
};

export default Image;
