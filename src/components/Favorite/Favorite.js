import styles from './Favorite.module.scss';
import PageTitle from '../PageTitle/PageTitle';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { favoriteCards } from '../../redux/cardsRedux';

const Favorite = () => {

  const cards = useSelector(state => favoriteCards(state.cards));
  if (cards.length === 0) {
    return (
      <div className={styles.favorite}>
        <PageTitle>favorite</PageTitle>
        <p className={styles.favorite_error}>No Cards</p>
      </div>
    )

  } else {

    return (
      <div className={styles.favorite}>
        <PageTitle>favorite</PageTitle>
        <ul className={styles.column}>
          {cards.map(card => <Card key={card.id} id={card.id} title={card.title} isFavorite={card.isFavorite} />)}
        </ul>
      </div>
    );
  }
};
export default Favorite;