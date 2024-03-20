import { Link } from "react-router-dom";
import { COLORS } from "@utils/theme";
import styles from "./not-found.module.css";

const NotFound = () => {

    return (
        <div className={styles.page}>
            <h1 className={styles.heading}>
                Such page doesn&apos;t exist
            </h1>

            <Link 
                to="/"
                style={{
                    color: COLORS.blue,
                }}
            >
                Go back to home page
            </Link>
        </div>
    );
};

export default NotFound;