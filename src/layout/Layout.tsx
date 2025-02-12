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
        {/* <h3>alexs home page🏠</h3> */}
        <div className={styles.columns}>
          <div className={styles.column}>
            <h4>Homeworks:</h4>
            <ul>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.linkActive : ""
                  }
                  to="homework-01"
                >
                  homework-01
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.linkActive : ""
                  }
                  to="homework-02"
                >
                  homework 02
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.linkActive : ""
                  }
                  to="homework-03"
                >
                  homework 03
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.linkActive : ""
                  }
                  to="homework-04"
                >
                  homework 04
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.linkActive : ""
                  }
                  to="homework-05"
                >
                  homework 05
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.linkActive : ""
                  }
                  to="homework-06"
                >
                  homework 06
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.linkActive : ""
                  }
                  to="homework-08"
                >
                  homework 08
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.linkActive : ""
                  }
                  to="homework-11"
                >
                  homework 11
                </NavLink>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Lessons:</h4>
            <ul>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.linkActive : ""
                  }
                  to="lesson-01"
                >
                  lesson 01
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.linkActive : ""
                  }
                  to="lesson-02"
                >
                  lesson 02
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.linkActive : ""
                  }
                  to="lesson-03"
                >
                  lesson 03
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.linkActive : ""
                  }
                  to="lesson-04"
                >
                  lesson 04
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.linkActive : ""
                  }
                  to="lesson-05"
                >
                  lesson 05
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.linkActive : ""
                  }
                  to="lesson-06"
                >
                  lesson 06
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.linkActive : ""
                  }
                  to="lesson-07"
                >
                  lesson 07
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.linkActive : ""
                  }
                  to="lesson-08"
                >
                  lesson 08
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.linkActive : ""
                  }
                  to="lesson-09"
                >
                  lesson 09
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.linkActive : ""
                  }
                  to="lesson-11"
                >
                  lesson 11
                </NavLink>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h4>Consultations:</h4>
            <ul>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.linkActive : ""
                  }
                  to="consultation-01"
                >
                  consultation 01
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.linkActive : ""
                  }
                  to="consultation-02"
                >
                  consultation 02
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.linkActive : ""
                  }
                  to="consultation-03"
                >
                  consultation 03
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.linkActive : ""
                  }
                  to="consultation-04"
                >
                  consultation 04
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.linkActive : ""
                  }
                  to="consultation-05"
                >
                  consultation 05
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.linkActive : ""
                  }
                  to="consultation-06"
                >
                  consultation 06
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.linkActive : ""
                  }
                  to="consultation-07"
                >
                  consultation 07
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.linkActive : ""
                  }
                  to="consultation-08"
                >
                  consultation 08
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.linkActive : ""
                  }
                  to="consultation-09"
                >
                  consultation 09
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.linkActive : ""
                  }
                  to="consultation-10"
                >
                  consultation 10
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.linkActive : ""
                  }
                  to="consultation-11"
                >
                  consultation 11
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? styles.linkActive : ""
                  }
                  to="consultation-12"
                >
                  consultation 12
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        <Outlet />
      </main>

      <footer className={styles.footer}>
        <Footer />
      </footer>
    </>
  );
}