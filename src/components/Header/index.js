import { Link } from "react-router-dom";
import logo from "./logo.png";
import styles from "./Header.module.css";
import HeaderLink from "components/HeaderLink";

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="./">
                <img src={logo} alt="Logo Cinetag"/>
            </Link>
            <nav>
                <HeaderLink url="./">
                    Home
                </HeaderLink>
                <HeaderLink url="./favoritos">
                    Favoritos
                </HeaderLink>
            </nav>
        </header>
    )
}

export default Header;