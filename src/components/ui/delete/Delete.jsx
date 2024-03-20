import { useContext } from "react";
import ProductContext from "@contexts/products-context/ProductsContext";
import trash from "@assets/icons/trash-big.png";
import styles from "./delete.module.css";

const Delete = ({
    product,
    setDeletedProduct,
    close,
}) => {

    const {deleteProduct} = useContext(ProductContext);

    if(!product) return <></>;

    const handleDelete = () => {
        console.log(product);
        deleteProduct(product.id);
        setDeletedProduct({});
        close();
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.box}>
                <img 
                    src={trash} 
                    alt="trash" 
                    className={styles.trash}
                />

                <p className={styles.warning}>
                    Вы действительно хотите удалить данный товар?
                </p>

                <button 
                    className={styles.delete_btn}
                    onClick={handleDelete}
                >
                    Удалить
                </button>

                <button 
                    className={styles.cancel_btn}
                    onClick={close}
                >
                    Отмена
                </button>
            </div>
        </div>
    );
};

export default Delete;