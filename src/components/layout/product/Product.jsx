import { useContext, useState } from "react";
import ProductContext from "@contexts/products-context/ProductsContext";
import AuthContext from "@contexts/auth-context/AuthContext";
import imgPlaceholder from "@assets/images/image-placeholder.png";
import grayHeart from "@assets/icons/heart-gray.png";
import redHeart from "@assets/icons/heart-red.png";
import settings from "@assets/icons/settings.png";
import styles from "./product.module.css";
import ProductSettings from "@components/ui/product-settings/ProductSettings";

const Product = ({
    product,
    setEditForm, 
    setEditedProduct,
    setDeletedProduct,
    setDelete,
}) => {

    const {products, handleLikes} = useContext(ProductContext);
    const {
        isProductLikedByUser,
        likeProduct
    } = useContext(AuthContext);

    const [isLikedByUser, setLikedByUser] = useState(
        isProductLikedByUser(product?.id, products)
    );
    const [areSettingsOpen, setSettingsOpen] = useState(false);

    const handleLike = () => {
        const isLike = likeProduct(product, products);
        
        handleLikes(product?.id, isLike);

        setLikedByUser(p => !p);
    };

    return (
        <div className={styles.product}>
            <img 
                src={product?.images[0] || imgPlaceholder} 
                alt="" 
                className={styles.image}
                style={{
                    border: !product.images[0] && "1px solid gray",
                }}  
            />

            <h3 className={styles.name}>
                {product.name}
            </h3>

            <p className={styles.price}>
                {product.price}
            </p>

            <div className={styles.product_footer}>
                <div className={styles.like_box}>
                    <img 
                        src={
                            isLikedByUser ? redHeart : grayHeart
                        } 
                        alt="" 
                        className={styles.like_icon}
                        onClick={handleLike}
                    />

                    <p className={styles.like_number}>
                        {product.likes || 0}
                    </p>
                </div>

                <img 
                    src={settings} 
                    alt="setting icon" 
                    className={styles.settings}
                    onClick={() => setSettingsOpen(true)}
                />

            {
                areSettingsOpen &&
                    <ProductSettings 
                        product={product} 
                        setEditForm={setEditForm}
                        setEditedProduct={setEditedProduct}
                        setDeletedProduct={setDeletedProduct}
                        setDelete={setDelete}
                    />
            }
            </div>  
        </div>
    );
};

export default Product;