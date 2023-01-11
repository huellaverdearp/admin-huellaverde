import { ElementType } from "react";
import { LogoSvg } from "./LogoSvg";
import Link from "next/link";

export const Logo: ElementType = () => (
  <Link href="/">
    <a
      aria-label="Huella Verde"
      title="Huella Verde - ARP"
      className="inline-flex items-center"
    >
      <LogoSvg />
      <span className="ml-2 text-xl font-bold tracking-wide text-green-primary">
        Huella Verde
      </span>
    </a>
  </Link>
);
