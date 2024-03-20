import { createContext, useState } from "react";

const AuthContext = createContext([]);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState({
        username: "",
        pwd: "",
        likedProducts: [],
        isAuthenticated: false,
    });

    const authContextVal = {
        user,
        setUser,
        authenticate: (username, pwd) => {
            if(!username || !pwd) throw Error("Поля не должны быть пустыми.");
            
            setUser({
                username: username,
                pwd: pwd,
                likedProducts: [],
                isAuthenticated: true,
            });
        },
        isAuthenticated: user.isAuthenticated,
        isProductLikedByUser: (productId, products) => {

            const likedProducts = user.likedProducts;
        
            if(!likedProducts || !Array.isArray(products)) return false;
        
            let isLiked = false;
            likedProducts.forEach(p => {
                if(p.id === productId) {
                    isLiked = true;
                    return;
                }
            });
        
            return isLiked;
        },
        likeProduct: (product) => {
            if(!product || !product.id || !Array.isArray(user.likedProducts)) return;
        
            let isAlreadyLikedId = -1;
            user.likedProducts.forEach((p, i) => {
                if(p.id === product.id) {
                    isAlreadyLikedId = i;
                    return;
                }
            });
        
            /* Remove like from user likes if already liked */
            /* Like if not liked yet */
            if(isAlreadyLikedId === -1) {
                setUser({
                    ...user,
                    likedProducts: [
                        ...user.likedProducts,
                        product,
                    ],
                })
            } else {
                setUser({
                    ...user,
                    likedProducts: user.likedProducts.filter(p => p.id !== product.id)
                });
            }

            return isAlreadyLikedId === -1 ? true : false;
        },
    };

    return (
        <AuthContext.Provider value={authContextVal}>
            {children}
        </AuthContext.Provider>
    );
};

export {
    AuthProvider,
};
export default AuthContext;