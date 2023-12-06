'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export const ToggleTheme = () => {
  const { systemTheme, theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState('');
  useEffect(() => {
    setCurrentTheme(theme === 'system' ? systemTheme : theme);
  }, [theme]);
  const handleChange = (value) => {
    setTheme(value);
  };
  return (
    <div className='flex gap-4 items-center absolute left-8 bottom-6'>
      <div
        onClick={() => handleChange('light')}
        className='rounded-lg hover:scale-110 cursor-pointer border-2 transition-all dark:border-light border-accent p-2'
      >
        <Image
          src={`/images/${
            currentTheme === 'dark' ? 'sun-light.png' : 'sun-checked.png'
          }`}
          className='w-6'
          width={512}
          height={512}
          alt='Light Mode'
        />
      </div>
      <div
        onClick={() => handleChange('dark')}
        className='rounded-lg hover:scale-110 cursor-pointer border-2 transition-all dark:border-accent border-dark p-2'
      >
        <Image
          src={`/images/${
            currentTheme === 'light' ? 'moon-dark.png' : 'moon-checked.png'
          }`}
          className='w-6'
          width={512}
          height={512}
          alt='Light Mode'
        />
      </div>
    </div>
  );
};

export default ToggleTheme;
