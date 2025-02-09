import { NavLink } from 'react-router-dom';
import styles from './layout.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to='/'><h3>home</h3></NavLink>
      <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to='fellowship'>fellowship</NavLink>
      <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to='fetch-fox'>fetch fox</NavLink>
      <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to='homework-04'>homework 04</NavLink>
      <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to='homework-06'>homework 06</NavLink>
      <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to='lesson-11'>lesson 11</NavLink>
      <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to='homework-11'>homework 11</NavLink>
    </header>
  );
}