import React from 'react'
import { useParams } from 'react-router-dom'
import { placesStore } from '../store/Store'
import "../styles/SinglePage.css"
import { FaAirbnb } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaStar } from "react-icons/fa"
import { IoMdThumbsUp } from "react-icons/io"
import { FaKey } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { RiMedal2Fill } from "react-icons/ri";
import CalendarFunc from './Calendar';
import { useState } from 'react';
import SinglePageMiddle from './SinglePageMiddle';
import Footer1 from './Footer1';
import Footer2 from './Footer2';
import { createContext } from 'react';
import "../styles/Tabs.css";

const SinglePage = () => {

    const [buttonOpen, setButtonOpen] = useState(false);
    const [buttonClose, setButtonClose] = useState(true);




    const IdContext = createContext();

    const buttonOpenHandler = (event) => {
        event.preventDefault();
        setButtonOpen(true)
        setButtonClose(false)
    }

    const buttonCloseHandler = (event) => {
        event.preventDefault();
        setButtonClose(false);
        setButtonOpen(false)

    }

    const params = useParams();
    const { id } = params;

    const placeClicked = placesStore.find((item) => item.id === id)

    const { name, homeMainPic, price, organizer, persons, duration_days, hut_included, dates, stars, carouselPic1, carouselPic2, carouselPic3, carouselPic4, carouselPic5 } = placeClicked || {}

    const [activeImg, setActiveImg] = useState(false);

    const [defaltImage, setDefaultImage] = useState(carouselPic1);


    const getImageSrcHnadler = (e) => {
        setDefaultImage(e.target.src)
        setActiveImg(true)
    }

    const setDefaultImgHnadler = () => {
        setDefaultImage(carouselPic1)
        setActiveImg(false);
    }


    return (

        <div>

            <div className='basicDeatils flex flex-row text-lg'>
                <p className='font-semibold uppercase'>{name}</p>
                <div className=''>
                    <FaStar className=' text-xl inline-block mr-2 ' />
                    <p className=' inline-block'> {stars} </p>
                </div>
                <p className=''>{Math.floor(Math.random() * (999 - 100 + 1) + 100)} reviews</p>

            </div>





            {activeImg === true ? <img src={defaltImage} className="single-page-main-pic cursor-pointer" /> : <img src={carouselPic1} className="single-page-main-pic cursor-pointer" />}


            <div className='absolute flex single-page-hold'>
                <img src={carouselPic2} className="w-40 rounded-xl cursor-pointer single-page-pic" onMouseOver={getImageSrcHnadler} onMouseLeave={setDefaultImgHnadler} />
                <img src={carouselPic3} className="w-40 rounded-xl cursor-pointer single-page-pic" onMouseOver={getImageSrcHnadler} onMouseLeave={setDefaultImgHnadler} />
                <img src={carouselPic4} className="w-40 rounded-xl cursor-pointer single-page-pic" onMouseOver={getImageSrcHnadler} onMouseLeave={setDefaultImgHnadler} />
                <img src={carouselPic5} className="w-40 rounded-xl cursor-pointer single-page-pic" onMouseOver={getImageSrcHnadler} onMouseLeave={setDefaultImgHnadler} />
            </div>

            <p className='features-text text-2xl font-semibold uppercase'> {name} : Informationen </p>

            <p className='actual-features text-xl'>{persons} person(s) . {duration_days} day(s) . {hut_included ? "Hut included" : "Hut not included"} </p>

            <p className='line1 text-gray-300'>__________________________________________________________________________________________________________</p>
            <p className='line2 text-gray-300'>__________________________________________________________________________________________________________</p>




            <div className='icon-hold'>
                <RiMedal2Fill className='text-3xl' />
                <FaKey className='text-3xl' />
                <FaCalendarCheck className='text-3xl' />
            </div>

            <div className='heading-hold'>
                <p className='text-xl font-semibold'>{organizer} is a Superhost. </p>
                <p className='text-xl font-semibold'>Great check-in experience.  </p>
                <p className='text-xl font-semibold'>Free cancellation for 48 hours. </p>
            </div>

            <div className='description-hold'>
                <p> highly rated hosts who are committed to providing great tours for their guests.</p>
                <p className='-mt-4 sm:mt-0'>90% of recent guests gave the check-in process a 5-star rating.</p>
                <p className='mt-4 sm:mt-0'>No questions asked.</p>

            </div>

            <div className='side-box-card absolute'>
                <p className='single-page-price font-semibold text-2xl'> € {price} / p.P. </p>

                <div className='ab'>
                    <FaStar />
                </div>

                <p className='rev-card absolute'>{stars}</p>
                <p className='rev2-card font-semibold'> <p>{Math.floor(Math.random() * (999 - 100 + 1) + 100)} reviews</p>  </p>

                <p>{dates.date_1.start_date_1} - {dates.date_1.end_date_1}</p>
                <p>{dates.date_2.start_date_2} - {dates.date_2.end_date_2}</p>
                <p>{dates.date_3.start_date_3} - {dates.date_3.end_date_3}</p>
                <p>{dates.date_1.start_date_1} - {dates.date_1.end_date_1}</p>
                <p>{dates.date_2.start_date_2} - {dates.date_2.end_date_2}</p>
                <p>{dates.date_3.start_date_3} - {dates.date_3.end_date_3}</p>
                <p>{dates.date_1.start_date_1} - {dates.date_1.end_date_1}</p>
                <p>{dates.date_2.start_date_2} - {dates.date_2.end_date_2}</p>
                <br></br>
                <p>Guide fee: {price}</p>
                <p>Service fee: {price * 0.03}</p>
                <p>TOTAL: {price + price * 0.03}</p>
                <div>
                    <button className='reserve-date-button rounded-xl' onClick={buttonOpenHandler}> Reserve</button>
                </div>
            </div>

            {/*<div className='reserve-date-button-holder'>
                <button className='reserve-date-button rounded-xl' onClick={buttonOpenHandler}> Reserve</button>

            </div>*/}


            {/*<div className="s">
                <CalendarFunc placesId={id} placesNam={name} placesPic={carouselPic1} buttonopenState={buttonOpen} buttonCloseState={buttonClose} closeFunc={buttonCloseHandler} />
            </div>*/}

            {/*<div className='expense-title-hold'>
                <p>{dates.date_1.start_date_1} - {dates.date_1.end_date_1}</p>
                <p>{dates.date_2.start_date_2} - {dates.date_2.end_date_2}</p>
                <p>{dates.date_3.start_date_3} - {dates.date_3.end_date_3}</p>
                <p>{dates.date_1.start_date_1} - {dates.date_1.end_date_1}</p>
                <p>{dates.date_2.start_date_2} - {dates.date_2.end_date_2}</p>
                <p>{dates.date_3.start_date_3} - {dates.date_3.end_date_3}</p>
                <p>{dates.date_1.start_date_1} - {dates.date_1.end_date_1}</p>
                <p>{dates.date_2.start_date_2} - {dates.date_2.end_date_2}</p>
                <p>{dates.date_3.start_date_3} - {dates.date_3.end_date_3}</p>
                <p>{dates.date_1.start_date_1} - {dates.date_1.end_date_1}</p>
                <p>{dates.date_2.start_date_2} - {dates.date_2.end_date_2}</p>
                <p>{dates.date_3.start_date_3} - {dates.date_3.end_date_3}</p>
            </div>*/}

            {/*<div className='calculated-expense-hold'>

                <p className='relative w-40 le'>calculated at next step</p>
                <p></p>
                <p>{price}</p>
                <p>{price * 0.04}</p>

            </div>*/}
            {/*<div className='line-total text-gray-300'>_____________________________________________________</div>

            <div className='price-total-text absolute font-semibold text-xl uppercase'>Guide fee</div>

            <p className='price-total absolute font-semibold text-xl'>Calculated At Checkout</p>*/}


            <SinglePageMiddle />

            <Footer1 />

            <Footer2 />


        </div>
    )
}


export default SinglePage;
