import { NavLink } from 'react-router-dom';
import styles from './layout.module.css';
import HomePageHomeworks from '../components/homePageHomeworks/HomePageHomeworks';

export default function Header() {
  return (
    <header className={styles.header}>
      <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to='/'><h3>home</h3></NavLink>
      <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to='fellowship'>fellowship</NavLink>
      <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to='fetch-fox'>fetch fox</NavLink>

    </header>
  );
}