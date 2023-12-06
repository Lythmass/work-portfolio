import './globals.css';
import { karla } from './fonts';
import { Provider } from 'services';
import { Frame, NavBar, ToggleTheme } from 'components';
import { ToastContainer } from 'react-toastify';
import AnimatedCursor from 'react-animated-cursor';

export const metadata = {
  title: 'Gigi Lapachishvili',
  description: 'Elegant Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`w-screen h-screen ${karla.className}`}>
        <AnimatedCursor
          color='255,255,255'
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={1.7}
          outerStyle={{
            mixBlendMode: 'exclusion',
          }}
        />
        <Provider>
          {/* <Trail /> */}
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
