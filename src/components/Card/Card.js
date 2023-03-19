import styles from './Card.module.scss';
import { removeCard, toggleCard } from '../../redux/cardsRedux';
import { useDispatch } from 'react-redux';
import clsx from 'clsx';


const Card = props => {
  const dispatch = useDispatch();

  const toggleFavorite = () => {
    dispatch(toggleCard(props.id))
  };

  const remove = () => {
    dispatch(removeCard(props.id));
  }


    return (
      <li className={styles.card}>{props.title}
        <div>
          <button onClick={toggleFavorite} className={clsx(styles.star_btn, props.isFavorite && styles.active)}>
            <span className='fa fa-star-o'></span>
          </button>
          <button onClick={remove} className={styles.remove_btn}>
            <span className='fa fa-trash'></span>
          </button>
        </div>
      </li>
    );
  };

  export default Card;