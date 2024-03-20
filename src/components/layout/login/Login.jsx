import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "@components/ui/input/Input";
import InputPwd from "@components/ui/input-pwd/InputPwd";
import AuthContext from "@contexts/auth-context/AuthContext";
import cartLogo from "@assets/icons/cart.png"
import { COLORS } from "@utils/theme";
import styles from "./login.module.css";

const Login = () => {

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

    const login = () => {
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
                    onClick={login}
                >
                    Войти
                </button>

                <Link
                    to="/registration"
                    className={styles.link}
                    style={{
                        color: COLORS.blue
                    }}
                >
                    Зарегистрироваться
                </Link>
            </div>
        </div>
    );
};

export default Login;