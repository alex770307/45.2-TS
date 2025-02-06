import { NavLink } from 'react-router-dom';
import styles from './layout.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to='/'>home</NavLink>
      <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to='fellowship'>fellowship</NavLink>
      <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to='fetch-fox'>fetch fox</NavLink>
      <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to='homework-03'>homework 03</NavLink>
      <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to='homework-04'>homework 04</NavLink>
      <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to='homework-06'>homework 06</NavLink>
    </header>
  );
}