import { useFavoriteContext } from 'hooks/useFavoriteContext';
import styles from './Card.module.css';
import favoriteIcon from './favorite.png';
import unfavoriteIcon from './unfavorite.png';
import { Link } from 'react-router-dom';

const Card = ({id, titulo, capa}) => {
    const {favorite, handleFavorite} = useFavoriteContext();
    const isFavorite = favorite.some(item => item.id === id);
    const icon = !isFavorite ? favoriteIcon : unfavoriteIcon;

    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>            
                <img src={capa} alt={titulo} className={styles.capa} />
                <h2>{titulo}</h2>
            </Link>
            <img src={icon}
                alt="Favoritar filme"
                className={styles.favorite}
                onClick={() => handleFavorite({id, titulo, capa})}
            />
        </div>
    )
}

export default Card;
