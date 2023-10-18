import React from 'react';

const ProductRow = () => {
  return (
    <div className="row product">
      <div>
        <img width="100px" height="50px" src="./images/shopping.jpg" alt="Sample Image" />
     
      
        <h4>Grossery</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div>
        $19.99
      </div>
    </div>
    
  );
}

export default ProductRow;