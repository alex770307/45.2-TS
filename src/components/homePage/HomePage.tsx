import { Link } from 'react-router-dom'
import styles from './homePage.module.css'
import HomePageLessons from './HomePageLessons';
import HomePageHomeworks from './HomePageHomeworks';
import HomePageConsultations from './HomePageConsultations';

// export default function HomePage(): JSX.Element {
//   return (
//     <div className={styles.gridContainer}>
      
//     </div>
//   );
// }
// import styles from './HomePage.module.css'

export default function HomePage():JSX.Element {
  return (
    <>
      <h2>alexs home page🏠</h2>
      <div className={styles.gridContainer}>
        <HomePageLessons />
        <HomePageHomeworks />
        <HomePageConsultations />
        {/* <Link to="lesson-01">
          <div>Lesson 1</div>
        </Link>
        <Link to="lesson-02">
          <div>Lesson 2</div>
        </Link>
        <Link to="lesson-03">
          <div>Lesson 3</div>
        </Link>
        <Link to="lesson-04">
          <div>Lesson 4</div>
        </Link>
        <Link to="lesson-05">
          <div>Lesson 5</div>
        </Link>
        <Link to="lesson-06">
          <div>Lesson 6</div>
        </Link>
        <Link to="lesson-07">
          <div>Lesson 7</div>
        </Link>
        <Link to="lesson-08">
          <div>Lesson 8</div>
        </Link>
        <Link to="lesson-09">
          <div>Lesson 9</div>
        </Link>
        <Link to="lesson-10">
          <div>Lesson 10</div>
        </Link>
        <Link to="lesson-11">
          <div>Lesson 11</div>
        </Link>
        <Link to="lesson-12">
          <div>Lesson 12</div>
        </Link> */}
        
        {/* <Link to="homework-12">
          <div>Homework 12</div>
        </Link> */}
        
      </div>
    </>
  );
}

