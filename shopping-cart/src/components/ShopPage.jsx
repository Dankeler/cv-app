import Card from "./Card"
import CheckoutItem from "./CheckoutItem"
import {useState, useEffect} from "react"
import "../styles/ShopPage.css"

const ShopPage = () => {
    const [products, setProducts] = useState([])
    const [selectedProducts, setSelectedProducts] = useState([])

    useEffect(() => {
      fetch("https://fakestoreapi.com/products?limit=6")
          .then((result) => result.json())
          .then((result) => {
              const productsWithAmount = result.map((product) => ({
                  ...product,
                  amount: 1
              }));
              setProducts(productsWithAmount);
          })
          .catch((error) => console.log(error));
  }, []);

    const removeItem = (product) => {
      setSelectedProducts((prevSelectedProducts) => 
      prevSelectedProducts.filter((pro) => pro !== product))
    }

    const addToCart = (product) => {
      if (!selectedProducts.includes(product)) {
        setSelectedProducts([...selectedProducts, product]);
      }
    };

    const changeAmount = (e, product) => {
      const newAmount = parseInt(e.target.value);
      setProducts((prevProducts) => {
          return prevProducts.map((prevProduct) => {
              if (prevProduct.id === product.id) {
                  return { ...prevProduct, amount: newAmount };
              }
              return prevProduct;
          });
      });
  };

    return (
        <div className="shop-page">
          <div className="shop-items">
          {products.map((product) => (
              <Card
                key={product.id}
                label={product.title}
                price={product.price}
                description={product.description}
                amount={product.amount}
                onChange={(e) => changeAmount(e, product)}
                onClick={() => addToCart(product)}
              />
            ))}
          </div>
          <div className="checkout-items">
            {selectedProducts.map((product) => (
              <CheckoutItem
                key={product.id}
                title={product.title}
                price={product.price}
                amount={product.amount}
                onClick={() => removeItem(product)}
              />
            ))}
            <h2>Total: {selectedProducts.reduce((accumulator, product) => accumulator + (product.price * parseInt(product.amount)), 0).toFixed(2)}</h2>
          </div>
        </div>
      );
    };

export default ShopPage;