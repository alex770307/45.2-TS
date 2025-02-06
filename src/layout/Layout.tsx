import { NavLink, Outlet } from 'react-router-dom'
import styles from './layout.module.css'
import Header from './Header';
import Footer from './Footer';

export default function Layout() {
  return (
    <>
      <header className={styles.header}>
        <Header />
      </header>

      <main className={styles.main}>
       <Outlet />
       <h4>Homeworks:</h4>
        <ol>
          <li> <NavLink className={({ isActive }) =>
          (isActive ? styles.linkActive : '')} to='homework-01'>homework-01 </NavLink></li>
          <li><NavLink className={({ isActive }) =>
          (isActive ? styles.linkActive : '')} to='homework-02'>homework 02 </NavLink></li>
          <li> <NavLink className={({ isActive }) =>
          (isActive ? styles.linkActive : '')} to='homework-03'>homework 03 </NavLink></li>
          <li> <NavLink className={({ isActive }) =>
          (isActive ? styles.linkActive : '')} to='homework-04'>homework 04 </NavLink></li>
          <li> <NavLink className={({ isActive }) =>
          (isActive ? styles.linkActive : '')} to='homework-05'>homework 05 </NavLink></li>
          <li><NavLink className={({ isActive }) =>
          (isActive ? styles.linkActive : '')} to='homework-06'>homework 06 </NavLink></li>
          <li> <NavLink className={({ isActive }) =>
          (isActive ? styles.linkActive : '')} to='homework-08'>homework 08 </NavLink></li>
        </ol>
        <h4>Lessons:</h4>
       <ol> 
        <li><NavLink className={({ isActive }) =>
          (isActive ? styles.linkActive : '')} to='lesson-01'>lesson 01 </NavLink></li>
        <li><NavLink className={({ isActive }) =>
          (isActive ? styles.linkActive : '')} to='lesson-02'>lesson 02 </NavLink></li>
        <li><NavLink className={({ isActive }) =>
          (isActive ? styles.linkActive : '')} to='lesson-03'>lesson 03 </NavLink></li>
        <li><NavLink className={({ isActive }) =>
          (isActive ? styles.linkActive : '')} to='lesson-04'>lesson 04 </NavLink></li>
        <li><NavLink className={({ isActive }) =>
          (isActive ? styles.linkActive : '')} to='lesson-05'>lesson 05 </NavLink></li>
        <li><NavLink className={({ isActive }) =>
          (isActive ? styles.linkActive : '')} to='lesson-06'>lesson 06 </NavLink></li>
        <li><NavLink className={({ isActive }) =>
          (isActive ? styles.linkActive : '')} to='lesson-07'>lesson 07 </NavLink></li>
        <li><NavLink className={({ isActive }) =>
          (isActive ? styles.linkActive : '')} to='lesson-08'>lesson 08 </NavLink></li>
        <li><NavLink className={({ isActive }) =>
          (isActive ? styles.linkActive : '')} to='lesson-09'>lesson 09 </NavLink></li>
       </ol>
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </>
  )
}