import { useState } from "react";
import eyeOpen from "@assets/icons/eye-open-blue.png";
import eyeClose from "@assets/icons/eye-close-black.png";
import { COLORS } from "@utils/theme";
import styles from "./input-pwd.module.css";

const InputPwd = ({
    pwd, onChange
}) => {

    const [isPwdVisible, setPwdVisible] = useState();

    return (
        <div className={styles.input_pwd}>
            <div className={styles.input_box}>
                <input 
                    value={pwd} 
                    type={
                        isPwdVisible
                        ? "text"
                        : "password"
                    }
                    placeholder="Пароль" 
                    className={styles.input}
                    onChange={onChange}
                />

                <img
                    src={
                        isPwdVisible
                        ? eyeOpen
                        : eyeClose
                    } 
                    alt="eye"
                    className={styles.eye}
                    style={{
                        opacity: !isPwdVisible && "0.6"
                    }}
                    onClick={() => setPwdVisible(p => !p)}
                />
            </div>

            <div 
                className={styles.underline} 
                style={{
                    backgroundColor: COLORS.grayLight
                }}    
            />
        </div>
    );
};

export default InputPwd;