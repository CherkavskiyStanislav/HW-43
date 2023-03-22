import React from "react";

function Add(props) {
  return (
    <div className="add">
      <label>Product name</label>
      <input 
        onBlur={props.handleNameBlur}
        type="text" 
        value={props.newProducts.name}
        onChange={(e) => props.setNewProducts({...props.newProducts, name: e.target.value})}
      />
      <span style={{color: 'red'}}>{props.nameError}</span>
      <label>Product price</label>
      <input 
        onBlur={props.handlePriceBlur}
        type="number" 
        value={props.newProducts.price}
        onChange={(e) => props.setNewProducts({...props.newProducts, price: e.target.value})}
      />
      <span style={{color: 'red'}}>{props.priceError}</span>
      <button 
        onClick={props.addProducts} 
        type="button"
      > Add
      </button>
    </div>
  );
}

export default Add;