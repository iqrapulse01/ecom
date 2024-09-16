import React, { useContext, useState } from 'react'
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating'
import { TfiFullscreen } from 'react-icons/tfi'
import { IoMdHeartEmpty } from 'react-icons/io';
import { MyContext } from '../../App';

const ProductItem = (props) => {
    const context = useContext(MyContext);

    const viewProductDetails = (id) => {
        context.setisOpenProductModel(true);
    }

    return (
        <>
            <div className={`item productItem ${props.itemView}`}>
                <div className="imgWrapper">
                    <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62-600x540.jpg" alt="" className='w-100' />
                    <div className="badge badge-primary">28%</div>

                    <div className="actions">
                        <Button onClick={() => viewProductDetails(1)}><TfiFullscreen /></Button>
                        <Button><IoMdHeartEmpty style={{ fontSize: '18px' }} /></Button>
                    </div>

                </div>
                <div className="info">
                    <h4>
                        Wether's Original Cramel Hard Candies
                    </h4>
                    <span className='text-success d-block' >In Stock</span>
                    <Rating className='mt-2 mb-2' name="read-only" value={5} readOnly size='small' precision={0.5} />
                    <div className="d-flex">
                        <span className='oldPrice'>$20.00</span>
                        <span className='netPrice text-danger ml-2'>$14.00</span>
                    </div>
                </div>
            </div>

            {/* <ProductModel/> */}
        </>
    )
}

export default ProductItem