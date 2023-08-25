import {createContext,useState} from "react";

const CartContext = createContext();

const CartProvider = ({children})=>{
    const storedCart = localStorage.getItem('productData');
    const cartFromLocalStorage = JSON.parse(storedCart) || [];
    const [cart, setCart] = useState(cartFromLocalStorage);

    const addToCart = (item) => {
        const existingItemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
        if (existingItemIndex !== -1) {
          // Item already exists in cart, increase quantity
          const updatedCart = [...cart];
          updatedCart[existingItemIndex].quantity += 1;
          setCart(updatedCart);
        } else {
          // Item doesn't exist in cart, add it with quantity 1
          setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
        }
    };
    
    const removeFromCart = (id) => {
        setCart((prevCart) =>
          prevCart.map((item) => {
            if (item.id === id) {
              // If quantity is greater than 1, decrement the quantity
              if (item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
              }
              // If quantity is 1, remove the item
              return null;
            }
            return item;
          }).filter(Boolean) // Filter out null items (items with quantity becoming zero)
        );
    };

    return(
        <CartContext.Provider value={{cart,addToCart,removeFromCart}}>
            {children}
        </CartContext.Provider>
    )
}
export { CartProvider, CartContext };