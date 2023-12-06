import { navBarItemsData } from 'data';
import { NavBarItem } from 'components';

export const NavBar = () => {
  const displayNavBarItems = navBarItemsData.map((item) => {
    return <NavBarItem key={item.id} name={item.name} link={item.link} />;
  });
  return (
    <div className='absolute flex gap-4 items-center top-6 right-8'>
      {displayNavBarItems}
    </div>
  );
};

export default NavBar;
