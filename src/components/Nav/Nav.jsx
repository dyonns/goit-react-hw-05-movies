import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import s from './Nav.module.scss';

const Nav = () => {
  return (
    <nav>
      <ul className={s.list}>
        <li className={s.item}>
          <NavLink
            className={({ isActive }) => {
              return clsx(s.link, isActive && s.active);
            }}
            to="/"
          >
            <h2>Home</h2>
          </NavLink>
        </li>
        <li className={s.item}>
          <NavLink
            className={({ isActive }) => {
              return clsx(s.link, isActive && s.active);
            }}
            to="/movies"
          >
            <h2>Movies</h2>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
