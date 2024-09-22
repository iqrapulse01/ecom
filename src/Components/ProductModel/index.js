import React, { useContext } from 'react'
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { MdClose, MdOutlineCompareArrows } from "react-icons/md";
import Rating from '@mui/material/Rating';
import QuantityBox from '../QuantityBox';
import { IoIosHeartEmpty } from 'react-icons/io';
import { MyContext } from '../../App';
import ProductZoom from '../ProductZoom';

const ProductModel = (props) => {

    const context = useContext(MyContext);

    return (
        <>
            <Dialog
                open={true}
                className='productModel'
                onClose={() => context.setisOpenProductModel(false)}
            >

                <Button className="close_" onClick={() => context.setisOpenProductModel(false)}>
                    <MdClose />
                </Button>
                <h4 className='mb-1 font-weight-bold'>All Natural Italian-Style Chicken</h4>
                <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center mr-4">
                        <span>Brands:</span>
                        <span className='ml-2'> <b>Welh's</b></span>
                    </div>
                    <Rating name='read-only' value={5} size='small' precision={0.5} />
                </div>
                <hr />
                <div className="d-flex row mt-2 .productDetaileModel">
                    <div className="col-md-5">

                        <ProductZoom />
                    </div>
                    <div className="col-md-7">
                        <div className="d-flex info align-items-center mb-3">
                            <span className="oldPrice lg mr-2">$9.35</span>
                            <span className="netPrice text-danger lg">$11.35</span>
                        </div>
                        <span className="badge bg-success">
                            IN STOCK
                        </span>
                        <p className='mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde saepe architecto sit tempore libero fuga expedita pariatur molestias quia a!</p>
                        <div className="d-flex align-items-center">
                            <QuantityBox />

                            <Button className='btn-blue btn-lg btn-big btn-round ml-3'>
                                Add To Cart
                            </Button>
                        </div>
                        <div className="d-flex align-items-center mt-5 actions">
                            <Button className='btn-round btn-sml' variant='outlined'> <IoIosHeartEmpty /> &nbsp; ADD TO WISHLIST</Button>
                            <Button className='btn-round btn-sml ml-3' variant='outlined'> <MdOutlineCompareArrows /> &nbsp; Compare</Button>

                        </div>
                    </div>

                </div>
            </Dialog>
        </>
    )
}

export default ProductModel;