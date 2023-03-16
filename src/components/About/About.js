import styles from './About.module.scss';
import PageTitle from '../PageTitle/PageTitle';

const About = () => {
  return (
    <div className={styles.about}>
      <PageTitle>about</PageTitle>
      <p className={styles.description}>Lorem Ipsum</p>
    </div>
  );
};
export default About;