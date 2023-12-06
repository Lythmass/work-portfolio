export const Skill = (props) => {
  return (
    <div className='dark:bg-light font-medium bg-dark px-3 py-2 dark:text-dark text-light rounded-lg cursor-default'>
      {props.name} - {props.years} year{props.years > 1 ? 's' : ''}
    </div>
  );
};

export default Skill;
