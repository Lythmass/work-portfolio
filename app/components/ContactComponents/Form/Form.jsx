'use client';

import { Input } from 'components';
import { validationData } from 'data';
import { montserrat } from 'fonts';
import { useForm } from 'react-hook-form';

export const Form = () => {
  const methods = useForm({ mode: 'onBlur' });
  const submitHandler = (data) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={methods.handleSubmit(submitHandler)}
      className='w-full h-full flex flex-col gap-4 overflow-auto'
    >
      <div className='flex w-full gap-3'>
        <Input
          register={methods.register}
          error={methods.formState.errors}
          name='name'
          placeholder={'John Doe'}
        />
        <Input
          register={methods.register}
          error={methods.formState.errors}
          name='email'
          placeholder={'johndoe@gmail.com'}
        />
      </div>
      <Input
        register={methods.register}
        error={methods.formState.errors}
        name='subject'
        placeholder={'Job Offer'}
      />
      <div className='w-full'>
        <h1 className={`text-sm ${montserrat.className} font-medium mb-1`}>
          Your Message
        </h1>
        <textarea
          {...methods.register('message', validationData['message'])}
          placeholder='We would like to set an appointment for the meeting!'
          className='border-2 h-[12vh] w-full px-2 py-1 bg-transparent dark:border-light border-dark rounded font'
        />
        <p className='text-sm text-red-500 h-1 mb-1 leading-none'>
          {methods.formState.errors['message']?.message}
        </p>
      </div>
      <button
        className='w-full leading-none border-2 dark:border-light border-dark dark:hover:text-light hover:text-dark dark:hover:bg-transparent hover:bg-transparent transition-all py-2 dark:bg-light bg-dark dark:text-dark text-light rounded-lg'
        type='submit'
      >
        Send
      </button>
    </form>
  );
};

export default Form;
