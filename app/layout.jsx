import './globals.css';
import { karla } from './fonts';
import { Provider } from 'services';

export const metadata = {
  title: 'Gigi Lapachishvili',
  description: 'Elegant Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={karla.className}>
        <Provider>
          <div className='w-full dark:bg-dark bg-light'>{children}</div>
        </Provider>
      </body>
    </html>
  );
}
