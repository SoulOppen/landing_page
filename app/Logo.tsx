import Image from "next/image";
import logo from "@/public/logo.webp";

type LogoProps = {
  size: number;
  classAdd?:string
};

export default function Logo({ size, classAdd }: LogoProps) {
  return (
    <Image
      src={logo}
      alt="Logo"
      width={size}
      height={size}
      className={`${classAdd} rounded-full m-auto filter sepia 150 shadow-[0_10px_30px_rgba(236,72,153,0.6)]`}
    />
  );
}