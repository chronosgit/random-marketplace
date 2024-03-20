import { useContext } from "react";
import ProductContext from "@contexts/products-context/ProductsContext";
import { COLORS } from "@utils/theme";
import crossIcon from "@assets/icons/cross.png";
import imagePlaceholder from "@assets/images/image-placeholder.png";
import styles from "./product-editor.module.css";
import useProductAdder from "@hooks/useProductAdder";

const ProductEditor = ({
    product,
    setEditedProduct,
    closeEditor,
}) => {

    const {
        productData, setPrice,
        setName, setDescrShort,
        setDescrFull, clearProductData,
        areFieldsEmpty, addPhoto,
    } = useProductAdder(product);

    const {editProduct} = useContext(ProductContext);

    if(!product) return <></>;

    const handleEditProduct = () => {
        if(areFieldsEmpty()) return;

        editProduct(product.id, productData, product.likes);
        clearProductData();
        setEditedProduct({});
        closeEditor();
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.adder_box}>
                <img 
                    src={crossIcon} 
                    alt="cross icon" 
                    className={styles.cross}   
                    onClick={closeEditor} 
                />

                <div className={styles.gallery} onClick={addPhoto}>
                {
                    Array.isArray(productData.images) && productData.images.length === 0 &&
                        <div className={styles.image_adder}>
                            <img 
                                src={productData.images[0] || imagePlaceholder} 
                                alt="" 
                                className={styles.image_adder_icon}
                            />

                            <p className={styles.image_adder_text}>
                                Добавить фото
                            </p>
                        </div>
                }

                {
                    Array.isArray(productData.images) && productData.images.map((im, ind) => 
                        <img
                            key={ind} 
                            src={im} 
                            alt=""
                            className={styles.image} 
                        />
                    )
                }
                </div>

                <input
                    value={productData.price} 
                    type="text"
                    placeholder="Цена" 
                    className={styles.input}
                    onChange={e => setPrice(e.target.value)}
                />

                <input 
                    value={productData.name} 
                    type="text"
                    placeholder="Название" 
                    className={styles.input}
                    onChange={e => setName(e.target.value)}
                />

                <input 
                    value={productData.descrShort} 
                    type="text"
                    placeholder="Краткое описание" 
                    className={styles.input}
                    onChange={e => setDescrShort(e.target.value)}
                />

                <input 
                    value={productData.descrFull} 
                    type="text"
                    placeholder="Полное описание" 
                    className={styles.input}
                    onChange={e => setDescrFull(e.target.value)}
                />

                <button 
                    className={styles.btn}
                    style={{
                        color: areFieldsEmpty()
                            ? "#9CA4AB"
                            : "white",
                        backgroundColor: areFieldsEmpty()
                            ? "#f7f6f9"
                            : COLORS.blue,
                        cursor: areFieldsEmpty()
                            ? "not-allowed"
                            : "pointer",
                    }}
                    onClick={handleEditProduct}
                >
                    Изменить
                </button>
            </div>
        </div>
    );
};

export default ProductEditor;