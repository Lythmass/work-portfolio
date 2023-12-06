import { skillsData } from 'data';
import { Skill } from 'components';

export const DisplaySkills = () => {
  const displaySkills = skillsData.map((skill) => {
    return <Skill key={skill.id} name={skill.name} years={skill.years} />;
  });
  return <div className='flex gap-4 w-full flex-wrap'>{displaySkills}</div>;
};

export default DisplaySkills;
