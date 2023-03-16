import styles from './NavBar.module.scss';
import Container from '../Container/Container';

const NavBar = () => {
  return (
    <nav>
      <Container>
        <div className={styles.navigation} >
          <div className={styles.icon}>
            <a href='/'><i className="fa fa-tasks"></i></a>
          </div>
          <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/favorite'>Favorite</a></li>
            <li><a href='/about'>About</a></li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};

export default NavBar;