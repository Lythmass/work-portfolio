'use client';
import { montserrat } from 'fonts';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const NavBarItem = (props) => {
  const pathname = usePathname();

  return (
    <>
      {pathname == props.link ? (
        <Link
          href={props.link}
          className={`bg-transparent border-2 border-accent text-accent px-2 py-1 rounded-lg font-medium transition-all ${montserrat.className}`}
        >
          {props.name}
        </Link>
      ) : (
        <Link
          href={props.link}
          className={`dark:bg-light bg-dark border-2 dark:border-light hover:dark:bg-dark hover:bg-light hover:dark:text-light hover:text-dark border-dark dark:text-dark text-light px-2 py-1 rounded-lg font-medium transition-all ${montserrat.className}`}
        >
          {props.name}
        </Link>
      )}
    </>
  );
};

export default NavBarItem;
