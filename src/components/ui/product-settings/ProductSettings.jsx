import editIcon from "@assets/icons/edit.png";
import trashIcon from "@assets/icons/trash-action.png";
import styles from "./product-setings.module.css";

const ProductSettings = ({
    product,
    setEditForm,
    setDeletedProduct,
    setEditedProduct,
    setDelete,
}) => {

    const onEditClick = () => {
        setEditForm(true);
        setEditedProduct(product);
    }

    const onDeleteClick = () => {
        setDelete(true);
        setDeletedProduct(product);
    };

    return (
        <div className={styles.box}>
            <div className={styles.setting_box}>
                <img 
                    src={editIcon} 
                    alt="pen icon" 
                    className={styles.setting_icon}
                />

                <p 
                    className={styles.setting_text}
                    onClick={onEditClick}
                >
                    Изменить
                </p>
            </div>

            <div className={styles.setting_box}>
                <img 
                    src={trashIcon} 
                    alt="trash icon" 
                    className={styles.setting_icon}
                />

                <p 
                    className={styles.setting_text}
                    onClick={onDeleteClick}
                >
                    Удалить
                </p>
            </div>
        </div>
    );
};

export default ProductSettings;