import Banner from "components/Banner";
import styles from "./Favorites.module.css";
import Title from "components/Title";
import Card from "components/Card";
import { useFavoriteContext } from "hooks/useFavoriteContext";

const Favorites = () => {
    const {favorite} = useFavoriteContext();
    return (
        <>
            <Banner image="favorites"/>
            <Title>
                <h1>Meus Favoritos</h1>
            </Title>
            <section className={styles.container}>
                {favorite.map((item) => {
                    return <Card {...item} key={item.id} />
                })}
            </section>
        </>
    )
}

export default Favorites;