import { useContext } from "react";
import ProductContext from "@contexts/products-context/ProductsContext";
import useProductAdder from "@hooks/useProductAdder";
import { COLORS } from "@utils/theme";
import imageAdderIcon from "@assets/icons/image-adder.png";
import crossIcon from "@assets/icons/cross.png";
import styles from "./product-adder.module.css";

const ProductAdder = ({
    closeAdder, toggleProductSuccess
}) => {
    
    const {
        productData, setPrice,
        setName, setDescrShort,
        setDescrFull, clearProductData,
        areFieldsEmpty, addPhoto,
    } = useProductAdder();

    const {addProduct} = useContext(ProductContext);

    const handleAddProduct = () => {
        if(areFieldsEmpty()) return;

        addProduct({
            price: productData.price,
            name: productData.name,
            descrShort: productData.descrShort,
            descrFull: productData.descrFull,
            images: productData.images,
        });
        clearProductData();
        toggleProductSuccess();
        closeAdder();
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.adder_box}>
                <img 
                    src={crossIcon} 
                    alt="cross icon" 
                    className={styles.cross}   
                    onClick={closeAdder} 
                />

                <div className={styles.gallery}>
                    <div 
                        className={styles.image_adder}
                        onClick={addPhoto}
                    >
                        <img 
                            src={imageAdderIcon} 
                            alt="" 
                            className={styles.image_adder_icon}
                        />

                        <p className={styles.image_adder_text}>
                            Добавить фото
                        </p>
                    </div>

                {
                    productData.images && productData.images.map((im, ind) => 
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
                    onClick={handleAddProduct}
                >
                    Добавить
                </button>
            </div>
        </div>
    );
};

export default ProductAdder;