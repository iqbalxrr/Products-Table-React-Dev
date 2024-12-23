
import React from 'react';
import FilterableProductTable from './FilterableProductTable';
import Products from './Products';

const ProductsTable = () => {
    return (
        <div>
            

            <FilterableProductTable></FilterableProductTable>
            <Products></Products>
        </div>
    );
};

export default ProductsTable;