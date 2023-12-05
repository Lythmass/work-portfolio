'use client';
import { TypeAnimation } from 'react-type-animation';

export const IntroAnimation = () => {
  return (
    <TypeAnimation
      sequence={[' Hi there! Are you looking for a Full-Stack Web Developer?']}
      wrapper='h1'
      speed={50}
      className='text-xl leading-none transition-all'
      repeat={1}
    />
  );
};

export default IntroAnimation;
