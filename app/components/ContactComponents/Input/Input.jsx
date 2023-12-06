import { validationData } from 'data';
import { montserrat } from 'fonts';

export const Input = (props) => {
  return (
    <div className='w-full'>
      <h1
        className={`text-sm ${montserrat.className} capitalize font-medium mb-1`}
      >
        {props.name}
      </h1>
      <input
        className='border-2 w-full px-2 py-1 bg-transparent dark:border-light border-dark rounded font'
        type='text'
        placeholder={props.placeholder}
        {...props.register(props.name, validationData[props.name])}
      />
      <p className='text-xs text-red-500 h-1 pt-[0.1rem]'>
        {props.error[props.name]?.message}
      </p>
    </div>
  );
};

export default Input;
