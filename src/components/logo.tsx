import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <Image src="/assets/logo.svg" alt="Logo" width={32} height={12} />
    </Link>
  );
}
