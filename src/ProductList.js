import React, { Component } from 'react';
import ProductRow from './ProductRow';

class ProductList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ProductRow />
      </div>
    );
  }
}

export default ProductList;