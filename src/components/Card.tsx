import React from "react";
import grainImage from "@/assets/images/grain.jpg";
import { twMerge } from "tailwind-merge";
interface Props {
  className?: string;
  children?: React.ReactNode;
}
const Card = ({ className, children }: Props) => {
  return (
    <div
      className={twMerge(
        "bg-gray-800 rounded-3xl z-0 overflow-hidden relative after:content-[''] after:z-10 after:absolute after:inset-0 after:outline-2 after:outline after:outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none p-6",
        className
      )}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
      {children}
    </div>
  );
};

export default Card;
