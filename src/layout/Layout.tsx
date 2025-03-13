import { NavLink, Outlet } from 'react-router-dom'
import styles from './layout.module.css'
// import Header from './Header';
// import Footer from './Footer';
import { getTotalPrice } from '../components/cart/Cart';
import { useCart } from '../context/CartContext';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useEffect, useState } from 'react';
import { loginToken } from '../features/auth/authAction';
import { logoutUser } from '../features/auth/authSlice';


export default function Layout() {
  // ! переключатель бургерного меню
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // забираем данные по юзеру из redux
  const { user } = useAppSelector(state => state.auth);

  const dispatch = useAppDispatch()

  const { cart } = useCart();


  // обработчик для logout
  const handleLogout = () => {
    // удаляем токен
    localStorage.removeItem('token')
    // очищаем стейт от данных по юзеру
    dispatch(logoutUser())
  }



  useEffect(() => {
    // пробуем забрать токен из браузера
    const token = localStorage.getItem('token')
    // ! если в браузере есть токен посылаем с ним запрос
    if (token) {
      dispatch(loginToken(token))
    }
  }, [])
  return (
    <>
      <header className={styles.header}>
        {/* кликабельная кнопка выпадающего меню */}
        <span onClick={() => setIsMenuOpen(!isMenuOpen)} className={styles.burger}>{isMenuOpen ? 'X' : '☰'}</span>

        {/* <Header /> */}
        <nav>
          {user.firstName ? <>
            <NavLink className={({ isActive }) => (isActive ? styles.linkActive : "")} to="/">home</NavLink>
            <NavLink className={({ isActive }) => (isActive ? styles.linkActive : "")} to="fellowship">fellowship</NavLink>
            <NavLink className={({ isActive }) => (isActive ? styles.linkActive : "")} to="fetch-fox">fetch fox</NavLink>
            <NavLink className={({ isActive }) => (isActive ? styles.linkActive : "")} to="products">products</NavLink>
            <NavLink className={({ isActive }) => (isActive ? styles.linkActive : "")} to="store">store</NavLink>
            <NavLink className={({ isActive }) => (isActive ? styles.linkActive : "")} to="cart">cart</NavLink>
            <NavLink className={({ isActive }) => (isActive ? styles.linkActive : "")} to="youtube">youtube</NavLink>
            {/* кнопка чтобы для выхода за текущего пользователь */}
            <NavLink onClick={handleLogout} to='login'>logout</NavLink>

          </> : <>

            <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to='login'>login</NavLink>
          </>}
        </nav>
        {user.firstName && <span>total: {getTotalPrice(cart)}€</span>}
        {/* <span>total: {getTotalPrice(cart)}€</span> */}

      </header>
      {isMenuOpen && <nav className={styles.burgerMenu}>
        {user.firstName ? <>
          <NavLink className={({ isActive }) => (isActive ? styles.linkActive : "")} to="/">home</NavLink>
          <NavLink className={({ isActive }) => (isActive ? styles.linkActive : "")} to="fellowship">fellowship</NavLink>
          <NavLink className={({ isActive }) => (isActive ? styles.linkActive : "")} to="fetch-fox">fetch fox</NavLink>
          <NavLink className={({ isActive }) => (isActive ? styles.linkActive : "")} to="products">products</NavLink>
          <NavLink className={({ isActive }) => (isActive ? styles.linkActive : "")} to="store">store</NavLink>
          <NavLink className={({ isActive }) => (isActive ? styles.linkActive : "")} to="cart">cart</NavLink>
          <NavLink className={({ isActive }) => (isActive ? styles.linkActive : "")} to="youtube">youtube</NavLink>
          {/* кнопка чтобы для выхода за текущего пользователь */}
          <NavLink onClick={handleLogout} to='login'>logout</NavLink>

        </> : <>

          <NavLink className={({ isActive }) => (isActive ? styles.linkActive : '')} to='login'>login</NavLink>
        </>}
      </nav>}

      <main className={styles.main}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        {/* <Footer /> */}
        Footer
      </footer>
    </>
  );
}