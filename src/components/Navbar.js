import { NavbarWrapper } from '../assets/wrappers/NavbarWrapper';
import { NavLink } from 'react-router-dom';
import { navList } from '../services/navList';
import { IoIosClose } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { closeSidebar } from '../features/appSlice';

const Navbar = () => {
  const dispatch = useDispatch();
  const closeMenu = () => {
    dispatch(closeSidebar());
  };
  return (
    <NavbarWrapper>
      <div className='navbar-container'>
        <button className='close-btn no-border' onClick={closeMenu}>
          <IoIosClose />
        </button>
        {navList.map((item) => {
          const { id, title, link } = item;
          return (
            <div className='navbar-item' key={id}>
              <NavLink to={link} onClick={closeMenu}>
                {title}
              </NavLink>
            </div>
          );
        })}
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
