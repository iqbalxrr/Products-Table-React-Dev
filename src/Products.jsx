
import React from 'react';

const Products = () => {

     let lastcatagory = null;

    const products =  [
        {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
        {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
        {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
        {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
        {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
        {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
      ];
      
    return (
        <div>
             <table className='mx-auto w-3/4 border p-5 mt-5'>
             <thead>
              <tr>
                <th>Name</th>
                <th>Price</th>
             </tr>  
            </thead> 
            <tbody>
             
               {
               
               products.map( product =>{

                const showCatagory = product.category !== lastcatagory;

                lastcatagory =product.category;

                return(
                    <>
                    {
                        showCatagory && ( 
                        <tr className='text-center font-bold border'>
                           <td colSpan="2">{product.category}</td>
                        </tr>)
                    }
                    
                    <tr>
                        <td style={{ color: product.stocked ? 'black' : 'red'}}>{product.name}</td>
                        <td>{product.price}</td>
                    </tr>

                    </>
        
                )

               })
               
               }

                   
               
            </tbody>

             </table>
        </div>
    );
};

export default Products;