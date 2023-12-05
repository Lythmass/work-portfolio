import { montserrat } from 'fonts';
import Image from 'next/image';

export const Header = () => {
  return (
    <div className='flex flex-col items-center gap-3'>
      <div className='rounded-full border-2 dark:border-light border-dark mb-1'>
        <Image
          width={512}
          height={512}
          className='w-28'
          src='/images/programmer.png'
          alt='Gigi Lapachishvili Portfolio'
        />
      </div>
      <h1 className={`text-2xl ${montserrat.className} font-bold`}>
        I&apos;m Gigi Lapachishvili
      </h1>
      <h1 className={`text-xl ${montserrat.className}`}>
        Hi there! Are you looking for a Full-Stack Web Developer?
      </h1>
    </div>
  );
};

export default Header;
