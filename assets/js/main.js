import loader from "./components/loader.js";
import showMenu from "./components/showMenu.js";
import showCart from "./components/showCart.js";
import products from "./components/products.js";
import getProducts from "./helpers/getProducts.js";
import cart from "./components/cart.js";

loader()
showMenu()
showCart()

products(await getProducts())

/*Products */
const {db, printProducts}= products(await getProducts())
/*Carrito */
cart(db, printProducts)