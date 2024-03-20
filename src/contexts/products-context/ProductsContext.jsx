import { createContext, useState } from "react";

const ProductContext = createContext([]);

const ProductsProvider = ({children}) => {

    const [products, setProducts] = useState([]);

    const addProduct = (newProduct) => {
        newProduct.id = (
            Math.floor(
                Math.random() * 
                Math.floor(Math.random() * Date.now())
            )
            .toString()
        );
        newProduct.likes = 0;

        setProducts([
            ...products,
            newProduct,
        ]);
    };

    const handleLikes = (productId, isLike) => {
        const changedProducts = products.map(p => {
            if(p.id === productId) {
                isLike ? p.likes++ : p.likes--;
            }
            return p;
        });

        setProducts(changedProducts);
    };

    const deleteProduct = (productId) => {
        const changedProducts = products.filter(p => p.id !== productId);

        setProducts(changedProducts);
    };

    const editProduct = (productId, newProductData, likes) => {
        const changedProducts = products.map(p => {
            if(p.id === productId) {
                const z = newProductData;
                z.likes = likes;
                return z;
            }
            return p;
        });

        console.log(changedProducts)

        setProducts(changedProducts);
    };

    const productsContextVal = {
        products,
        addProduct,
        handleLikes,
        deleteProduct,
        editProduct,
    };

    return (
        <ProductContext.Provider value={productsContextVal}>
            {children}
        </ProductContext.Provider>
    );
};

export {
    ProductsProvider,
};
export default ProductContext;