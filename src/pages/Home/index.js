import Banner from "components/Banner";
import Card from "components/Card";
import Title from "components/Title";
import styles from "./Home.module.css";
import { useEffect, useState } from "react";

const Home = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/monicahillman/cinetag-api/videos')
            .then(resposta => resposta.json())
            .then(dados => {
                setVideos(dados)
            })
    }, [])

    return (
        <>
            <Banner image="home"/>
            <Title>
                <h1>Um lugar para guardar seus vídeos e filmes!</h1>
            </Title>
            <section className={styles.container}>
                {videos.map((video) => {
                    return <Card {...video} key={video.id} />
                })}
            </section>
        </>
    )
}

export default Home;