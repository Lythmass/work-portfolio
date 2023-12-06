export const Frame = ({ children }) => {
  return (
    <div className='border relative  w-full h-full dark:border-light border-dark'>
      {children}
    </div>
  );
};

export default Frame;
