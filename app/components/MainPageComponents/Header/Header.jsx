import { montserrat } from 'fonts';
import Image from 'next/image';
import { IntroAnimation, Socials } from 'components';

export const Header = () => {
  return (
    <div className={`${montserrat.className} flex flex-col items-center gap-3`}>
      <div className='rounded-full border-2 dark:border-light border-dark'>
        <Image
          width={512}
          height={512}
          className='w-28'
          src='/images/programmer.png'
          alt='Gigi Lapachishvili Portfolio'
        />
      </div>
      <h1 className={`text-2xl font-bold leading-none`}>
        I&apos;m Gigi Lapachishvili
      </h1>
      <IntroAnimation />
      <Socials />
    </div>
  );
};

export default Header;
