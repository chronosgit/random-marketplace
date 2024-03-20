import { useContext } from "react";
import Product from "@components/layout/product/Product";
import ProductContext from "@contexts/products-context/ProductsContext";
import styles from "./products.module.css";

const Products = ({
    editedProduct, 
    setEditedProduct,
    setDeletedProduct,
    setEditForm,
    setDelete,
}) => {

    const {products} = useContext(ProductContext);

    return (
        <div className={styles.products}>
        {
            products.map((p, i) => 
                <Product 
                    key={i}
                    product={p}
                    editedProduct={editedProduct}
                    setEditedProduct={setEditedProduct}
                    setEditForm={setEditForm}
                    setDelete={setDelete}
                    setDeletedProduct={setDeletedProduct}
                />
            )
        }
        </div>
    );
};

export default Products;