import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "@contexts/auth-context/AuthContext";
import { COLORS } from "@utils/theme";
import cart from "@assets/icons/cart.png";
import avatarDefault from "@assets/images/avatar-default.png";
import styles from "./header.module.css";

const Header = ({
    openProductAdder,
}) => {

    const navigate = useNavigate();

    const {user} = useContext(AuthContext);

    const logoOnClick = () => {
        navigate("/");
    };

    const profileOnClick = () => {
        navigate("/profile");
    };

    return (
        <header className={styles.header}>
            <div 
                className={styles.logo_box} 
                onClick={logoOnClick}
            >
                <img 
                    src={cart} 
                    alt="cart" 
                    className={styles.logo}
                />

                <h2 className={styles.company_name}>
                    Mobi Market
                </h2>
            </div>

            <div className={styles.header_right}>
                <button 
                    className={styles.btn}
                    style={{
                        backgroundColor: COLORS.blue
                    }}
                    onClick={openProductAdder}
                >
                    Подать объявление
                </button>

                <div 
                    className={styles.profile}
                    onClick={profileOnClick}
                >
                    <div className={styles.profile_bio}>
                        <p className={styles.name}>
                            {user.username}
                        </p>

                        <p className={styles.email}>
                            {user.email}
                        </p>
                    </div>

                    <img 
                        src={avatarDefault} 
                        alt="avatar" 
                        className={styles.profile_avatar}    
                    />
                </div>
            </div>  
        </header>
    );
};

export default Header;