import { GoThreeBars } from 'react-icons/go';
import { MenuWrapper } from '../assets/wrappers/MenuWrapper';
import logo from '../assets/images/logo-black-no-bg.svg';
import logoSm from '../assets/images/logo-color-sm.svg';
import { Navbar } from '../components';
import { toggleSidebar } from '../features/appSlice';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Menu = () => {
  const { isSidebarOpen } = useSelector((store) => store.app);
  const dispatch = useDispatch();
  const toggle = () => {
    dispatch(toggleSidebar());
  };
  return (
    <MenuWrapper>
      <div className='logo-container'>
        <button className='no-border'>
          <div className='small-screens'>
            <Link to='/'>
              <img src={logoSm} alt='logo' className='sm-img' />
            </Link>
          </div>
          <div className='large-screens'>
            <Link to='/'>
              <img src={logo} alt='logo' />
            </Link>
          </div>
        </button>
      </div>
      <div className='navbar-menu'>
        <button
          className={`no-border icon-btn small-screens ${
            isSidebarOpen ? 'open-sidebar' : ''
          }`}
          onClick={toggle}
        >
          <GoThreeBars />
        </button>
        <div className='small-screens'>{isSidebarOpen && <Navbar />}</div>
        <div className='large-screens'>
          <Navbar />
        </div>
      </div>
    </MenuWrapper>
  );
};

export default Menu;
