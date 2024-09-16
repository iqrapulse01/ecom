import React, { useContext, useRef, useState } from 'react'
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { MdClose, MdOutlineCompareArrows } from "react-icons/md";
import Rating from '@mui/material/Rating';
import Slider from "react-slick";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import QuantityBox from '../QuantityBox';
import { IoIosHeartEmpty } from 'react-icons/io';
import { MyContext } from '../../App';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';



const ProductModel = (props) => {

    const [slideIndex, setSlideIndex] = useState(0);
    const zoomSliderBig = useRef();
    const zoomSlider = useRef();

    const context = useContext(MyContext);

    const goto = (index) => {
        setSlideIndex(index);
        zoomSlider.current.swiper.slideTo(index);
        zoomSliderBig.current.swiper.slideTo(index);
    }

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
                        <div className="productZoom position-relative">
                            <div className="badge badge-primary">
                                23%
                            </div>
                            <Swiper
                                slidesPerView={1}
                                spaceBetween={0}
                                navigation={false}
                                slidesPerGroup={1}
                                modules={[Navigation]}
                                className="zoomSliderBig"
                                ref={zoomSliderBig}>
                                <SwiperSlide>
                                    <div className="item">
                                        <InnerImageZoom zoomType="hover" zoomScale={1}
                                            src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg`}
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="item">
                                        <InnerImageZoom zoomType="hover" zoomScale={1}
                                            src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg`}
                                        />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="item">
                                        <InnerImageZoom zoomType="hover" zoomScale={1}
                                            src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg`}
                                        />
                                    </div>
                                </SwiperSlide>

                            </Swiper>
                        </div>
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={0}
                            navigation={true}
                            slidesPerGroup={1}
                            modules={[Navigation]}
                            className="zoomSlider"
                            ref={zoomSlider}>

                            <SwiperSlide>
                                <div className={`item ${slideIndex === 0 && 'item_actve'}`}>
                                    <img src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg`} className="w-100" alt="" onClick={() => goto(0)} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={`item ${slideIndex === 0 && 'item_actve'}`}>
                                    <img src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg`} className="w-100" alt="" onClick={() => goto(1)} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={`item ${slideIndex === 0 && 'item_actve'}`}>
                                    <img src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg`} className="w-100" alt="" onClick={() => goto(2)} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={`item ${slideIndex === 0 && 'item_actve'}`}>
                                    <img src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg`} className="w-100" alt="" onClick={() => goto(3)} />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={`item ${slideIndex === 0 && 'item_actve'}`}>
                                    <img src={`https://klbtheme.com/bacola/wp-content/uploads/2021/04/product-image-62.jpg`} className="w-100" alt="" onClick={() => goto(4)} />
                                </div>
                            </SwiperSlide>


                        </Swiper>
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