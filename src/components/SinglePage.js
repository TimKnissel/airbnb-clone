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

    const { name, homeMainPic, price, organizer, persons, duration_days, hut_included, dates, reviews, stars, carouselPic1, carouselPic2, carouselPic3, carouselPic4, carouselPic5 } = placeClicked || {}

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

    const [selectedDateIndex, setSelectedDateIndex] = useState(null);

    // Function to handle date selection
    const handleDateToggle = (index) => {
        setSelectedDateIndex(index);
    };


    return (

        <div>

            <div className='basicDeatils flex flex-row text-lg'>
                <p className='font-semibold uppercase'>{name}</p>
                <div className=''>
                    <FaStar className=' text-xl inline-block mr-2 ' />
                    <p className=' inline-block'> {stars} </p>
                </div>
                <p className=''>{reviews.length} reviews</p>

            </div>





            {activeImg === true ? <img src={defaltImage} className="single-page-main-pic cursor-pointer" /> : <img src={carouselPic1} className="single-page-main-pic cursor-pointer" />}


            <div className='absolute flex single-page-hold'>
                <img src={carouselPic2} className="w-40 h-auto rounded-xl cursor-pointer single-page-pic" onMouseOver={getImageSrcHnadler} onMouseLeave={setDefaultImgHnadler} />
                <img src={carouselPic3} className="w-40 h-auto rounded-xl cursor-pointer single-page-pic" onMouseOver={getImageSrcHnadler} onMouseLeave={setDefaultImgHnadler} />
                <img src={carouselPic4} className="w-40 h-auto rounded-xl cursor-pointer single-page-pic" onMouseOver={getImageSrcHnadler} onMouseLeave={setDefaultImgHnadler} />
                <img src={carouselPic5} className="w-40 h-auto rounded-xl cursor-pointer single-page-pic" onMouseOver={getImageSrcHnadler} onMouseLeave={setDefaultImgHnadler} />
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
                
                    <p className='single-page-price font-semibold text-2xl inline-block'> Ab {price} € </p>
                    <p className='inline-block'> &nbsp;/&nbsp; Person</p>
                
                
                <div className="container">
                <p>_____________________________________</p>
                    {dates && Object.values(dates).map((date, index) => (
                        <div className="date-container" key={index}>
                            <p className='selected-date-price'>{price} € / Person</p>
                            <p>
                                <input 
                                    type="checkbox" 
                                    id={`date-checkbox-${index}`}
                                    className="date-checkbox"
                                    checked={selectedDateIndex === index}
                                    onChange={() => handleDateToggle(index)} 
                                />
                                <label htmlFor={`date-checkbox-${index}`} className="checkmark"></label>
                                <span>
                                    {date.start_date} - {date.end_date}
                                </span>
                            </p>
                            <p>_____________________________________</p>
                        </div>
                    ))}
                    <br></br>
                    {selectedDateIndex !== null && (
                        <div className='selected-date-container'>
                            <p className="selected-date">
                                Selected Date: {Object.values(dates)[selectedDateIndex].start_date} - {Object.values(dates)[selectedDateIndex].end_date}
                            </p>
                        </div>
                    )}
                </div>

                <br></br>
                <div class="reserve-date-button-container">
                    <button className='reserve-date-button rounded-xl' onClick={buttonOpenHandler}>Reserve</button>
                </div>
                <br></br>
                <div className='price-container'>
                    <p>Guide fee</p>
                    <p className='price-summary'>{price} €</p>
                </div>
                <div className='price-container'>
                    <p>Service fee</p>
                    <p className='price-summary'>{Math.floor(price * 0.03)} €</p>
                </div>
                <p>_____________________________________</p>
                <div className='price-container'>
                    <p>TOTAL</p>
                    <p className='price-summary-total'>{Math.floor(price + price * 0.03)} €</p>
                </div>
            </div>

            <SinglePageMiddle />

            {/*<Footer1 />*/}

            <Footer2 />


        </div>
    )
}


export default SinglePage;
