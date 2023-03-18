import styles from './Card.module.scss';
import { toggleCard } from '../../redux/store';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';


const Card = props => {
  const dispatch = useDispatch();

  const toggleFavorite = () => {
    dispatch(toggleCard(props.id))
  };


    return (
      <li className={styles.card}>{props.title}
        <div>
          <button onClick={toggleFavorite} className={clsx(styles.star_btn, props.isFavorite && styles.active)}>
            <span className='fa fa-star-o'></span>
          </button>
        </div>
      </li>
    );
  };

  export default Card;