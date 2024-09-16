import { Checkbox, FormControlLabel } from '@mui/material'
import React, { useState } from 'react';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [value, setValue] = useState([100, 10000]);
    const [value2, setValue2] = useState(0);

    return (
        <>
            <div className="sidebar">
                <div className="filterBox">
                    <h6>
                        PRODUCT CATEGORIES
                    </h6>
                    <div className="scroll">
                        <ul>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Jewellery" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Liquid Crystal" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Clay Art" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="structure" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Beauty" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Jewellery" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Neck_Lace" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Resin Work" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Natural" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Beautifull" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Jewellery" />
                            </li>
                        </ul>
                    </div>
                    <div className="filterBox mt-3">
                        <h6>
                            FILTER BY PRICE
                        </h6>
                        <RangeSlider value={value} onInput={setValue} min={100} max={60000} step={5} />
                        <div className="d-flex pt-2 pb-2 priceRange">
                            <span>From: <strong className="text-dark">
                                Rs:{value[0]}
                            </strong> </span>
                            <span className='ml-auto'>From: <strong className="text-dark">
                                Rs:{value[1]}
                            </strong> </span>
                        </div>
                    </div>
                    <div className="filterBox">
                    <h6>
                        PRODUCT STATUS
                    </h6>
                   <div className="scroll">
                        <ul>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="In Stock" />
                            </li>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="On Sale" />
                            </li>
                        </ul>
                    </div>
                   </div>
                   <div className="filterBox">
                    <h6>
                        BRAND
                    </h6>
                   <div className="scroll">
                        <ul>
                            <li>
                                <FormControlLabel className='w-100' control={<Checkbox />} label="Fairy" />
                            </li>
                           
                        </ul>
                    </div>
                   </div>
                  
                </div>
                <br />
                <Link to="#">
                    <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/05/sidebar-banner.gif" className='w-100' alt="" />
                </Link>
            </div>

        </>
    )
}

export default Sidebar