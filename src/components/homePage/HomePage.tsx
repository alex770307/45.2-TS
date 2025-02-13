
import styles from './homePage.module.css'
import HomePageLessons from './HomePageLessons';
import HomePageHomeworks from './HomePageHomeworks';
import HomePageConsultations from './HomePageConsultations';


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
        </Link> */}
     
      </div>
    </>
  );
}

