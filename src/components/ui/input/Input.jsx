import { COLORS } from "@utils/theme";
import styles from "./input.module.css";

const Input = ({
    value, onChange, ph = ""
}) => {

    return (
        <div className={styles.input_box}>
            <input 
                value={value}
                placeholder={ph}
                className={styles.input}
                onChange={onChange}
            />

            <div 
                className={styles.underline} 
                style={{
                    backgroundColor: COLORS.grayLight
                }}    
            />
        </div>
    );
};

export default Input;