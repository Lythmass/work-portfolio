import { montserrat } from 'fonts';

export const AboutMeText = () => {
  return (
    <div className='flex flex-col items-start gap-7 w-1/2'>
      <h1 className={`text-4xl ${montserrat.className} font-bold underline`}>
        Experience:
      </h1>
      <p className='text-lg font-medium'>
        I&apos;m a Computer Science student from Tbilisi, Georgia, with 2 years
        of experience in Web Development and Programming. <br /> <br />
        My Work experience comes from working as a full-time Full-Stack Web
        Developer at Redberry, which lasted half a year of hard and consistent
        work and the results are extraordinary. <br /> <br /> I worked both on
        Front-end (Next.js) and Back-end (Laravel) along with writing clean code
        and understandable documentations. <br /> <br /> I&apos;ve additional
        experience as a freelancer on Upwork, where I&apos;ve taken several
        distinct projects, each requiring different skills, knowledge and
        creativity.
      </p>
    </div>
  );
};

export default AboutMeText;
