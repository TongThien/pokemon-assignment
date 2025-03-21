"use client";

import Image from "next/image";
import React from "react";

function PokemonImage({ src, name }: { src: string; name: string }) {
  return (
    <Image
      unoptimized
      src={src}
      alt={name}
      className="object-contain transition-opacity opacity-0 duration-[2s] w-20"
      onLoadingComplete={(image) => image.classList.remove("opacity-0")}
      width={35}
      height={53}
    />
  );
}

export default PokemonImage;
