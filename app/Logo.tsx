import Image from "next/image";
import logo from "@/public/logo.webp";

type props={
  addClass?:string
}

export default function Logo({addClass}:props) {

  return (
    <div className={`${addClass} mx-auto`}>
    <Image
      src={logo}
      alt="Logo"
      fill
      className="mx-auto filter sepia 150 shadow-[0_10px_30px_rgba(236,72,153,0.6)] object-cover rounded-full"
    />
    </div>
  );
}