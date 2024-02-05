import Container from "components/Container";
import Footer from "components/Footer";
import Header from "components/Header";
import FavoriteContextProvider from "context/FavoriteContext";
import { Outlet } from "react-router-dom";

const DefaultPage = () => {
    return (
        <main>
            <Header />
            <FavoriteContextProvider>
                <Container>
                    <Outlet />
                </Container>
            </FavoriteContextProvider>
            <Footer />
        </main>
    )
}

export default DefaultPage;