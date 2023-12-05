export const Frame = ({ children }) => {
  return (
    <div className='border px-9 py-16 w-full h-full dark:border-light border-dark'>
      {children}
    </div>
  );
};

export default Frame;
