import { useState } from "react";
import Header from "@components/layout/header/Header";
import ProductAdder from "@components/layout/product-adder/ProductAdder";
import Products from "@components/layout/products/Products";
import { ProductsProvider } from "@contexts/products-context/ProductsContext";
import infoIcon from "@assets/icons/info.png";
import styles from "./home.module.css";
import ProductEditor from "@components/layout/product-editor/ProductEditor";
import Delete from "@components/ui/delete/Delete";

const Home = () => {

    const [isAdding, setAdding] = useState(false);
    const [isProductAdded, setProductAdded] = useState(false);
    const [editedProduct, setEditedProduct] = useState({});
    const [deletedProduct, setDeletedProduct] = useState({});
    const [isEditForm, setEditForm] = useState(false);
    const [isDelete, setDelete] = useState(false);

    const onProductAddedSuccess = () => {
        setProductAdded(true);

        setTimeout(() => {
            setProductAdded(false);
        }, 5000);
    };

    return (
        <ProductsProvider>
            <div 
                className={styles.page}
                style={{
                    backdropFilter: isAdding && "blur(0.1rem)",
                }}
            >   
                <div 
                    className={styles.feedback}
                    style={{
                        top: isProductAdded ? "1rem" : "-5rem",
                    }}
                >
                    <img 
                        src={infoIcon} 
                        alt="info icon" 
                        className={styles.feedback_icon}
                    />

                    <p className={styles.feedback_text}>
                        Товар добавлен
                    </p>
                </div>

                <Header openProductAdder={() => setAdding(true)} />

                <Products 
                    editedProduct={editedProduct}
                    setEditedProduct={setEditedProduct}
                    setDeletedProduct={setDeletedProduct}
                    setEditForm={setEditForm}
                    setDelete={setDelete}
                />

            {
                isAdding &&
                    <ProductAdder 
                        toggleProductSuccess={onProductAddedSuccess}
                        closeAdder={() => setAdding(false)} 
                    />
            }

            {
                isEditForm &&
                    <ProductEditor
                        product={editedProduct}
                        setEditedProduct={setEditedProduct}
                        closeEditor={() => setEditForm(false)}
                    />
            }

            {
                isDelete &&
                    <Delete
                        product={deletedProduct}
                        setDeletedProduct={setDeletedProduct}
                        close={() => setDelete(false)}
                    />
            }
            </div>
        </ProductsProvider>
    );
};

export default Home;