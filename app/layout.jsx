import './globals.css';
import { karla } from './fonts';
import { Provider } from 'services';
import { Frame, NavBar, ToggleTheme } from 'components';
import { ToastContainer } from 'react-toastify';

export const metadata = {
  title: 'Gigi Lapachishvili',
  description: 'Elegant Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`w-screen h-screen ${karla.className}`}>
        <Provider>
          <ToastContainer
            position='top-left'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='light'
          />
          <div className='w-full p-12 h-full dark:bg-dark bg-light dark:text-light text-dark'>
            <Frame>
              <NavBar />
              {children}
              <ToggleTheme />
            </Frame>
          </div>
        </Provider>
      </body>
    </html>
  );
}
