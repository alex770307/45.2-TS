
import styles from './homePage.module.css'
import HomePageLessons from '../homePageLessons/HomePageLessons';
import HomePageHomeworks from '../homePageHomeworks/HomePageHomeworks';
import HomePageExercises from '../homePageExercises/HomePageExercises';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';


export default function HomePage(): JSX.Element {
  const { user } = useAppSelector(state => state.auth);


  return (
    <>
      {user.id ? 
        <div className={styles.gridContainer}>
          <HomePageLessons />
          <HomePageHomeworks />
          <HomePageExercises />
          {/* <Link to="lesson-01">
          <div>Lesson 1</div>
        </Link> */}
        </div> : <div className={styles.noLogin}>

          <p>Hi! You are unauthorized user! Go to <Link to='login'>login</Link> 🦊</p>

        </div>}
    </>
  );
}

