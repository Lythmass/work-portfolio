import { DisplayProjects } from 'components';
import { montserrat } from 'fonts';

export default function Projects() {
  return (
    <main className='flex w-full h-full flex-col items-center justify-center gap-8'>
      <h1 className={`text-4xl ${montserrat.className} font-bold underline`}>
        My Projects:
      </h1>
      <DisplayProjects />
    </main>
  );
}
