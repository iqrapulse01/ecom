import React, { useState } from 'react'
import ProductZoom from "../../Components/ProductZoom"
import QuantityBox from "../../Components/QuantityBox"
import Rating from '@mui/material/Rating'
import Button from '@mui/material/Button'
import { BsCartFill } from 'react-icons/bs'
import { FaRegHeart } from 'react-icons/fa'
import { MdOutlineCompareArrows } from 'react-icons/md'
import Tooltip from '@mui/material/Tooltip'
import RelatedProducts from './RelatedProducts'


const ProductDetails = () => {
    const [activeTabs, setActiveTabs] = useState(0);
    return (
        <>

            <section className='productDetails section'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 pl-5">
                            <ProductZoom />
                        </div>
                        <div className="col-md-7 pl-5 pr-5">
                            <h2 className='hd text-capitalize'>
                                All Type of Jewellery available
                            </h2>
                            <ul className="list list-inline d-flex align-items-center">
                                <li className=" list-inline-item">
                                    <div className="d-flex align-items-center">
                                        <span className="text-light mr-2">
                                            Brands :
                                        </span>
                                        <span>Fairy</span>

                                    </div>
                                </li>
                                <li className="list-inline-item ">
                                    <div className="d-flex align-items-center">
                                        <Rating name='read-only' value={4.5} readOnly precision={0.5} size='small' />
                                        <span className='text-light cusor ml-2'>1 Review</span>
                                    </div>
                                </li>

                            </ul>

                            <div className="d-flex info mb-3">
                                <span className="oldPrice">$20.00</span>
                                <span className="netPrice text-danger ml-2">$14.00</span>
                            </div>
                            <span className="badge badge-success">
                                IN STOCK
                            </span>
                            <p className="mt-3 ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nobis distinctio officia, rerum recusandae veritatis cum aspernatur? Ut minima eos nulla eveniet quo nihil commodi id! Repellendus possimus, fugit accusamus ipsum culpa neque debitis, error ex quo quas cumque aliquid!
                            </p>
                            <div className="d-flex align-items-center mt-4">
                                <QuantityBox />
                                <Button className='btn-blue btn-lg btn-big btn-round'> <BsCartFill /> &nbsp; Add to Cart</Button>

                                <Tooltip title="Add to WishList" placement='top'>
                                    <Button className='btn-blue btn-lg btn-big btn-circle ml-4'>  <FaRegHeart /> </Button>
                                </Tooltip>

                                <Tooltip title="Add to Compare" placement='top'>
                                    <Button className='btn-blue btn-lg btn-big btn-circle ml-2'><MdOutlineCompareArrows /> </Button>
                                </Tooltip>
                            </div>
                        </div>
                    </div>

                    <br />

                    <div className="card mt-5 p-5 detailsPageTabs">
                        <div className="customTabs">
                            <ul className="list list-inline">
                                <li className="list-inline-item">
                                    <Button className={`${activeTabs === 0 && 'active'}`} onClick={() => {
                                        setActiveTabs(0)
                                    }}>Description</Button>
                                </li>
                                <li className="list-inline-item">
                                    <Button className={`${activeTabs === 1 && 'active'}`} onClick={() => {
                                        setActiveTabs(1)
                                    }}>Additional Info</Button>
                                </li>
                                <li className="list-inline-item">
                                    <Button className={`${activeTabs === 2 && 'active'}`} onClick={() => {
                                        setActiveTabs(2)
                                    }}>Review(3)</Button>
                                </li>
                            </ul>
                            <br />
                            {
                                activeTabs === 0 &&
                                <div className="tabContent">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae iusto a totam vitae deleniti expedita accusamus eligendi corrupti ullam facilis? Ad quisquam esse odit eos sequi aliquam aperiam libero. Voluptate quos sapiente, velit voluptatibus expedita adipisci at molestias. Obcaecati, tempora.
                                </div>
                            }

                            {
                                activeTabs === 1 &&
                                <div className="tabContent">
                                    <div className="table-responsive">
                                        <table className="table table-bordered">
                                            <tbody>
                                                <tr className="stand-up">
                                                    <th>Stand Up</th>
                                                    <td>
                                                        <p>35'l * 24-45 (front to back wheel )</p>
                                                    </td>
                                                </tr>
                                                <tr className="folded-wo-wheels">
                                                    <th>Folded (w/o wheels)</th>
                                                    <td>
                                                        p
                                                        32.5"L * 18.5"H
                                                    </td>
                                                </tr>
                                                <tr className="door-pass-through">
                                                    <th>Door Pass Through</th>
                                                    <td>
                                                        <p>24</p>
                                                    </td>
                                                </tr>
                                                <tr className="door-pass-through">
                                                    <th>Door Pass Through</th>
                                                    <td>
                                                        <p>24</p>
                                                    </td>
                                                </tr>
                                                <tr className="door-pass-through">
                                                    <th>Door Pass Through</th>
                                                    <td>
                                                        <p>24</p>
                                                    </td>
                                                </tr>
                                                <tr className="door-pass-through">
                                                    <th>Door Pass Through</th>
                                                    <td>
                                                        <p>24</p>
                                                    </td>
                                                </tr>
                                                <tr className="door-pass-through">
                                                    <th>Door Pass Through</th>
                                                    <td>
                                                        <p>24</p>
                                                    </td>
                                                </tr>
                                                <tr className="wheels">
                                                    <th>wheels</th>
                                                    <td>
                                                        <p>24</p>
                                                    </td>
                                                </tr>
                                                <tr className="handle-height-ground-to-handle">
                                                    <th>handle-height(ground to handle)</th>
                                                    <td>
                                                        <p>24-67</p>
                                                    </td>
                                                </tr>
                                            </tbody>

                                        </table>
                                    </div>

                                </div>
                            }
                            {
                                activeTabs === 2 &&
                                <div className="tabContent">
                                    <div className="row">
                                        <div className="col-md-9">
                                            <h3>
                                                Customer questions and answers
                                            </h3>
                                            <br />
                                            <div className="card p-4 reviewsCard flex-row">
                                                <div className="image">
                                                    <div className="rounded-circle">
                                                        <img src="https://wp.alithemes.com/html/nest/demo/assets/imgs/blog/author-2.png" alt="autgor image" />
                                                    </div>
                                                    <span className="text-g d-block text-center font-weight-bold">
                                                        Iqra
                                                    </span>
                                                </div>
                                                <div className="info pl-5">
                                                    <div className="d-flex align-items-center w-100">
                                                        <h5 className="text-light">
                                                            01/03/2002
                                                        </h5>
                                                        <div className="ml-auto">
                                                            <Rating name='half-rating-read'
                                                                value={4.5}
                                                                precision={0.5}
                                                                size='small'
                                                                readOnly
                                                            />



                                                        </div>
                                                    </div>
                                                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat consequatur laboriosam eveniet nostrum possimus quod sint rem nam at molestiae distinctio, fugiat consequuntur quia magni necessitatibus quidem, voluptate iusto ea, enim in. Libero, nihil quos.</p>
                                                </div>
                                            </div>

                                            <br className="res-hide" />
                                            <br className="res-hide" />


                                            <form className="reviewForm">
                                                <h4>Add a review</h4>
                                                <div className="form-group">
                                                    <textarea name="review" placeholder='write a review' className="form-control">

                                                    </textarea>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <input type="text" className='form-control'
                                                                placeholder='Name'
                                                                name='userName'
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="form-group">
                                                            <Rating className='form-control'
                                                                value={4.5}
                                                                precision={0.5}
                                                                size='small'
                                                            />
                                                        </div>
                                                    </div>

                                                </div>

                                                <br />
                                                <div className="form-group">
                                                    <Button type='submit' className='btn-blue btn-lg btn-big btn-round'>
                                                        Submit Review
                                                    </Button>
                                                </div>

                                            </form>
                                        </div>





                                    </div>
                                </div>
                            }
                        </div>

                    </div>
                    <br />
                    <RelatedProducts title="Related Products" />
                    <RelatedProducts title="Recently Viewed Products" />
                </div>

            </section>
        </>
    )
}

export default ProductDetails;

