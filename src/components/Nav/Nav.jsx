import { NavLink, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import s from './Nav.module.scss';

const Nav = () => {
  const getACtiveClass = ({ isActive }) => clsx(s.link, isActive && s.active);
  const Location = useLocation();
  return (
    <nav>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink className={getACtiveClass} to="/" state={Location}>
            <h2>Home</h2>
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={getACtiveClass} to="/movies" state={Location}>
            <h2>Movies</h2>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
