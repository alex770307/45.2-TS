import { NavLink, Outlet } from 'react-router-dom'
import styles from './layout.module.css'

export default function Layout() {
  return (
    <>
      <header className={styles.header}>
        <NavLink to='/'>hume</NavLink>
        <NavLink to='fellowship'>Fellowship</NavLink>
        <NavLink to='fetch-fox'>fetch-fox</NavLink>
      </header>
      <main className={styles.main}>
        <Outlet/>
      </main>
      <footer className={styles.footer}>
        footer
      </footer>
    </>
  )
}