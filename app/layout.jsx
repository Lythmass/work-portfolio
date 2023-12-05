import './globals.css';
import { karla } from './fonts';
import { Provider } from 'services';
import { Frame } from 'components';

export const metadata = {
  title: 'Gigi Lapachishvili',
  description: 'Elegant Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`w-screen h-screen ${karla.className}`}>
        <Provider>
          <div className='w-full h-full p-12 dark:bg-dark bg-light dark:text-light text-dark'>
            <Frame>{children}</Frame>
          </div>
        </Provider>
      </body>
    </html>
  );
}
