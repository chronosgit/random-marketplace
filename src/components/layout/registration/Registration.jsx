import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "@components/ui/input/Input";
import InputPwd from "@components/ui/input-pwd/InputPwd";
import AuthContext from "@contexts/auth-context/AuthContext";
import cartLogo from "@assets/icons/cart.png"
import arrowLeft from "@assets/icons/arrow-left-black.png";
import { COLORS } from "@utils/theme";
import styles from "./registration.module.css";

const Registration = () => {

    const navigate = useNavigate();

    const {authenticate} = useContext(AuthContext);

    const [username, setUsername] = useState("");
    const [pwd, setPwd] = useState("");

    const isFormEmpty = () => {
        return !(username.length > 0 && pwd.length > 0);
    };

    const usernameOnChange = (e) => {
        setUsername(e.target.value);
    };

    const pwdOnChange = (e) => {
        setPwd(e.target.value);
    };

    const onRedirect = () => {
        navigate("/login");
    };

    const register = () => {
        if(username.length == 0 || pwd.length == 0) return;

        try {
            authenticate(username, pwd);
            navigate("/");
        } catch(err) {
            console.error(err);
        }
    };

    return (
        <div className={styles.page}>
            <div className={styles.splash}>
                <img 
                    src={cartLogo} 
                    alt="cart logo"
                    className={styles.logo} 
                />

                <h2 className={styles.title}>
                    Mobi Market
                </h2>
            </div>

            <div className={styles.auth_form}>
                <div 
                    className={styles.nav}
                    onClick={onRedirect}
                >
                    <img 
                        src={arrowLeft}
                        alt="arrow to left" 
                        className={styles.nav_icon}
                    />

                    <p className={styles.nav_text}>
                        Назад
                    </p>
                </div>

                <div className={styles.input_username_wrapper}>
                    <Input
                        username={username}
                        onChange={usernameOnChange}
                        ph="Имя пользователя"
                    />
                </div>

                <InputPwd
                    pwd={pwd}
                    onChange={pwdOnChange}
                    ph="Пароль"
                />

                <button 
                    className={styles.btn}
                    style={{
                        color: COLORS.white,
                        backgroundColor: isFormEmpty() 
                            ? COLORS.grayLight 
                            : COLORS.blue,
                        cursor: isFormEmpty()
                            ? "not-allowed"
                            : "pointer"
                    }}
                    onClick={register}
                >
                    Зарегистрироваться
                </button>

                <Link
                    to="/login"
                    className={styles.link}
                    style={{
                        color: COLORS.blue
                    }}
                >
                    Войти
                </Link>
            </div>
        </div>
    );
};

export default Registration;