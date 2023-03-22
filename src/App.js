import React, {useState} from "react";
import Product from "./components/Product";
import { v4 as uuid } from 'uuid';
import Add from "./components/Add";

function App () {

  const productsList = [
  {name: 'Iphone', price: 800, id: 1},
  {name: 'Watch', price: 100, id: 2},
  ];
  const [products, setProducts] = useState(productsList)
  const [newProducts, setNewProducts] = useState({ name: '', price: '', id: uuid() });
  const [nameError, setNameError] = useState('');
  const [priceError, setPriceError] = useState('');

  const validateName = () => {
    const name = newProducts.name.trim();
    if (name.length < 2) {
      setNameError('The name of the product must write more than one liter');
      return false;
    } else {
      setNameError('');
      return true;
    }
  }

  const validatePrice = () => {
    const price = parseFloat(newProducts.price);
    if (Number(newProducts.price) <= 0) {
      setPriceError('The price of the product must be greater than 0');
      return false;
    } else {
      setPriceError('');
      return true;
    }
  }

  const changeName = (e)=>{
   setNewProducts((prev)=>({...prev, name: e.target.value}))
  }

  const changePrice = (e)=>{
    setNewProducts((prev)=>({...prev, price: e.target.value}))
  }

  const addProducts = () => {
    const isNameValid = validateName();
    const isPriceValid = validatePrice();
    if (isNameValid && isPriceValid) {
      setProducts((prev) => ([...prev, {name: newProducts.name, price: newProducts.price, id: uuid()}]))
      setNewProducts({ name: '', price: '', id: uuid() });
    }
  }

  const handleNameBlur = () => {
    validateName();
  }
  
  const handlePriceBlur = () => {
    validatePrice();
  }

  const removeProduct = (id) => {
    const newList =  products.filter(product => product.id !== id);
    setProducts(newList);
  }

return (
<div className="wrapper">
<Add 
  handleNameBlur={handleNameBlur} 
  handlePriceBlur={handlePriceBlur} 
  newProducts={newProducts} 
  setNewProducts={setNewProducts} 
  nameError={nameError} 
  priceError={priceError} 
  addProducts={addProducts}
/>
  <div className="list">
    {products.map(product => 
      <Product 
        onRemove={removeProduct} 
        key={product.id} 
        id={product.id} 
        name={product.name} 
        price={`${product.price} $`} 
      />)
    }
  </div>
</div> 
);
}

export default App;