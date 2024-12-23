
import React, { useState } from 'react';

const FilterableProductTable = () => {

    const [filterText , setfilterText]= useState('');
    const [inStokeOnly , setinStokeOnly]=useState(false);
    
    return (
        <div>
            
           <form className='mx-auto w-3/4 border p-5 mt-10'>

            <input className=' py-2 border ' type="search" name="" id=""  placeholder='search..'/>
            <br />
            <label>
                <input type="checkbox" name="" id="" /> Only show Products in stoke
            </label>
           </form>
        </div>
    );
};

export default FilterableProductTable;