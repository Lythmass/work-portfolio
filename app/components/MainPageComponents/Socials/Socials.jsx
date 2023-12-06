import Image from 'next/image';

export const Socials = () => {
  return (
    <div className='flex items-center gap-3'>
      <a
        href='https://www.linkedin.com/in/glapachishvili/'
        target='_blank'
        className='hover:scale-110 transition-all'
      >
        <Image
          className='w-6'
          src='/images/linkedin.png'
          width={512}
          height={512}
          alt='Gigi Lapachishvili linkedin profile'
        />
      </a>
      <a
        href='https://github.com/Lythmass'
        target='_blank'
        className='hover:scale-110 transition-all'
      >
        <Image
          className='w-6'
          src='/images/github.png'
          width={512}
          height={512}
          alt='Gigi Lapachishvili github profile'
        />
      </a>
    </div>
  );
};

export default Socials;
