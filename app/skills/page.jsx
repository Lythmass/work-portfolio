import { DisplaySkills } from 'components';
import { montserrat } from 'fonts';

export default function Skills() {
  return (
    <main className='flex w-full h-full flex-col items-center justify-center p-12'>
      <div className='flex flex-col gap-8 items-start w-1/2'>
        <h1 className={`text-4xl ${montserrat.className} font-bold underline`}>
          Skills:
        </h1>
        <DisplaySkills />
      </div>
    </main>
  );
}
