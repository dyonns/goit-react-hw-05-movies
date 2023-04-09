import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import s from './Nav.module.scss';

const Nav = () => {
  const getACtiveClass = ({ isActive }) => clsx(s.link, isActive && s.active);
  return (
    <nav>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink className={getACtiveClass} to="/">
            <h2>Home</h2>
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink className={getACtiveClass} to="/movies">
            <h2>Movies</h2>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
