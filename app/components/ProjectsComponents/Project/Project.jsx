import { montserrat } from 'fonts';
import Image from 'next/image';

export const Project = (props) => {
  return (
    <div className='flex flex-col gap-2 mb-14'>
      <a
        href={props.link}
        target='_blank'
        className={`${montserrat.className} font-bold text-xl transition-all hover:text-accent`}
      >
        {props.title} ↗️
      </a>
      <Image
        className='w-full border-2 dark:border-light border-dark h-64 object-cover'
        src={`/images/${props.image}`}
        alt={props.title}
        width={1000}
        height={1000}
      />
    </div>
  );
};

export default Project;
