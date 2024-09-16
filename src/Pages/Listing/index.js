import React, { useState } from 'react'
import Sidebar from '../../Components/Sidebar';
import Button from "@mui/material/Button";
import { IoIosMenu } from 'react-icons/io';
import { TfiLayoutGrid4Alt } from 'react-icons/tfi';
import { CgMenuGridR } from 'react-icons/cg';
import { FaAngleDown } from 'react-icons/fa';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ProductItem from '../../Components/ProductItem';

const Listing = () => {
const [productView, setProductView]=useState('four')
    const [anchorEl, setAnchorEl] = useState(null);
    const openDropdown = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <>
            <div className="product_Listing_Page">
                <div className="container">
                    <div className="productListing d-flex">
                        <Sidebar />


                        <div className="content_right">
                            <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/08/bacola-banner-18.jpg" className='w-100' style={{ borderRadius: "8px" }} />


                            <div className="showBy mt-3 mb-3 d-flex align-items-center">
                                <div className="d-flex align-items-center btnWrapper">
                                    <Button onClick={()=>setProductView("one")}><IoIosMenu /></Button>
                                   
                                    <Button onClick={()=>setProductView("four")}><TfiLayoutGrid4Alt /></Button>
                                    <Button onClick={()=>setProductView("three")}><CgMenuGridR /></Button>
                                </div>
                                <div className="ml-auto showByFilter">
                                    <Button onClick={handleClick}>Show 9 <FaAngleDown /> </Button>

                                    <Menu
                                        className='w-100 showPerPageDropdown'
                                        id="basic-menu"
                                        anchorEl={anchorEl}
                                        open={openDropdown}
                                        onClose={handleClose}
                                        MenuListProps={{
                                            'aria-labelledby': 'basic-button',
                                        }}
                                    >
                                        <MenuItem onClick={handleClose}>10</MenuItem>
                                        <MenuItem onClick={handleClose}>20</MenuItem>
                                        <MenuItem onClick={handleClose}>30</MenuItem>
                                        <MenuItem onClick={handleClose}>40</MenuItem>
                                        <MenuItem onClick={handleClose}>50</MenuItem>
                                        <MenuItem onClick={handleClose}>60</MenuItem>
                                        <MenuItem onClick={handleClose}>70</MenuItem>
                                    </Menu>
                                </div>
                            </div>

                            <div className="productListing">
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                                <ProductItem itemView={productView}/>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Listing;