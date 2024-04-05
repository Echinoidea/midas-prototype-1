import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function MidasLogoNoText() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" /> */}
      <Image
            src="/midas-logo-no-text.png"
            width={1066}
            height={614}
            className="justify-center align-middle hidden md:block"
            alt="midas logo"
      />
    </div>
  );
}
