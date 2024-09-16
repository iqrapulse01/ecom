import React from 'react'
import { CiBadgeDollar } from 'react-icons/ci';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import { LuShirt } from 'react-icons/lu';
import { TbDiscount, TbTruckDelivery } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="topInfo row">
                    <div className="col d-flex
                    align-items-center">
                        <span><LuShirt /></span>
                        <span className='ml-2'>EveryDay Fresh Products</span>

                    </div>
                    <div className="col d-flex
                    align-items-center">
                        <span><TbTruckDelivery /></span>
                        <span className='ml-2'>Free Delivery For order $70</span>

                    </div>
                    <div className="col d-flex
                    align-items-center">
                        <span><TbDiscount /></span>
                        <span className='ml-2'>Daily Mega Discounts</span>

                    </div>
                    <div className="col d-flex
                    align-items-center">
                        <span><CiBadgeDollar /></span>
                        <span className='ml-2'>Best Price on the market</span>

                    </div>
                </div>



                <div className="row mt-5 linksWrap">
                    <div className="col">
                        <h5>WashAble</h5>
                        <ul>
                            <li><Link to="#">Fruit Fresh</Link></li>
                            <li><Link to="#">  Vegetables Fresh</Link></li>
                            <li><Link to="#">Herbs Fresh</Link></li>
                            <li><Link to="#">Fruit Seasoning</Link></li>
                            <li><Link to="#">Package Products</Link></li>
                            <li><Link to="#">party Time</Link></li>
                            <li><Link to="#">Trays Time</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>Bakery and Dry</h5>
                        <ul>
                            <li><Link to="#">Fruit Fresh</Link></li>
                            <li><Link to="#">  Vegetables Fresh</Link></li>
                            <li><Link to="#">Herbs Fresh</Link></li>
                            <li><Link to="#">Fruit Seasoning</Link></li>
                            <li><Link to="#">Package Products</Link></li>
                            <li><Link to="#">party Time</Link></li>
                            <li><Link to="#">Trays Time</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>Fruit & Vegetables</h5>
                        <ul>
                            <li><Link to="#">Fruit Fresh</Link></li>
                            <li><Link to="#">  Vegetables Fresh</Link></li>
                            <li><Link to="#">Herbs Fresh</Link></li>
                            <li><Link to="#">Fruit Seasoning</Link></li>
                            <li><Link to="#">Package Products</Link></li>
                            <li><Link to="#">party Time</Link></li>
                            <li><Link to="#">Trays Time</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>Jewellery</h5>
                        <ul>
                            <li><Link to="#">Fruit Fresh</Link></li>
                            <li><Link to="#">  Vegetables Fresh</Link></li>
                            <li><Link to="#">Herbs Fresh</Link></li>
                            <li><Link to="#">Fruit Seasoning</Link></li>
                            <li><Link to="#">Package Products</Link></li>
                            <li><Link to="#">party Time</Link></li>
                            <li><Link to="#">Trays Time</Link></li>
                        </ul>
                    </div>
                    <div className="col">
                        <h5>Resin And Clay</h5>
                        <ul>
                            <li><Link to="#">Fruit Fresh</Link></li>
                            <li><Link to="#">  Vegetables Fresh</Link></li>
                            <li><Link to="#">Herbs Fresh</Link></li>
                            <li><Link to="#">Fruit Seasoning</Link></li>
                            <li><Link to="#">Package Products</Link></li>
                            <li><Link to="#">party Time</Link></li>
                            <li><Link to="#">Trays Time</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="copyright mt3 pt-3 pb-3 d-flex">
                    <p className='mb-0'>Copyright 2024. All rights reserved. Powered by Iqra Aslam.</p>
                    <ul className="list-inline list ml-auto mb-0">
                        <li className="list-inline-item">
                            <Link to="#">
                                <FaFacebookF/>
                            </Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="#">
                                <FaTwitter/>
                            </Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="#">
                                <FaInstagram/>
                            </Link>
                        </li>
                    </ul>

                </div>



            </div>
        </footer>
    )
}

export default Footer;