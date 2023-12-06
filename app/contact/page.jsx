import { ContactInfo, Form } from 'components';
import { montserrat } from 'fonts';

export default function Contact() {
  return (
    <main className='flex w-full h-full overflow-auto flex-col items-center justify-center p-12'>
      <div className='flex flex-col gap-8 items-start w-1/2'>
        <h1 className={`text-4xl ${montserrat.className} font-bold underline`}>
          Contact Me:
        </h1>
        <ContactInfo />
        <Form />
      </div>
    </main>
  );
}
