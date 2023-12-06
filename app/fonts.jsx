import { Montserrat } from 'next/font/google';
import { Karla } from 'next/font/google';

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['800', '700', '400', '500'],
});

export const karla = Karla({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});
