import React from 'react';
import "../styles/SinglePageMiddle.css";
import { FaStar } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { placesStore } from '../store/Store';
import rev1 from "../styles/stars1.png";
import rev2 from "../styles/stars2.png";
import reviews_hardcoded from "../styles/rev.png";
import modalPic from "../styles/pic.png";

const SinglePageMiddle = () => {
    const params = useParams();
    const { id } = params;
    const placeClicked = placesStore.find((item) => item.id === id);
    const { name, organizer, reviews, stars } = placeClicked || {};

    function truncateReview(review) {
        const maxLength = 200; // Maximum characters to display
        if (review.length <= maxLength) {
            return review;
        } else {
            const truncatedReview = review.slice(0, maxLength);
            // Find the last space within the maximum length to avoid cutting off words
            const lastSpaceIndex = truncatedReview.lastIndexOf(' ');
            return truncatedReview.slice(0, lastSpaceIndex) + ' ...';
        }
    }

    return (
        <div className="spm-container">
            <p className='spmLine'></p>

            <div className='section1-hold'>
                <img src='https://a0.muscache.com/im/pictures/54e427bb-9cb7-4a81-94cf-78f19156faad.jpg' className='w-36' />
                <br></br>
                <p>Every booking includes free protection from Host cancellations, listing inaccuracies, and other issues like trouble checking in.</p>
                <p className='font-bold text-xl underline'>Learn more</p>
            </div>

            <p className='spmLine2'></p>

            <div className='section2-hold'>
                <p>Your perfect guide for a safe summit tour.</p>
                <p>{name} is a great tour, challenging but on the top you get a great view. The mountain is exceptional and very popular. 
                    Guides from {organizer} who know the peak like nobody else are the best in this area.</p>
                <br></br>
                <p className="font-bold text-xl underline">Show more</p>
                <br></br>
            </div>

            <div className='section3'>
                <p className='font-bold'>What this tour offers</p>
                <p>Tour by certified guide, ...</p>
                <br />
                <p className="font-bold text-xl underline">Show more</p>
            </div>

            <p className='spmLine3'></p>


            <div className='review-columns-category'>
                <div className='spm-star'>
                    <FaStar className='text-2xl st' />
                </div>
                <p className='spm-rev text-2xl'>{stars}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <div className='column-category'>
                    <div>
                        <p className='column-category-item'>Communication</p>
                        <FaStar className=' text-xl inline-block mr-2 ' />
                        <p className=' inline-block'> {5.1} </p>
                    </div>
                    <div>
                        <p className='column-category-item'>Check-In</p>
                        <FaStar className=' text-xl inline-block mr-2 ' />
                        <p className=' inline-block'> {3.7} </p>
                    </div>
                    <div>
                        <p className='column-category-item'>Safety</p>
                        <FaStar className=' text-xl inline-block mr-2 ' />
                        <p className=' inline-block'> {3.9} </p>
                    </div>
                </div>
                <div className='column-category'>
                    <div>
                        <p className='column-category-item'>Fun</p>
                        <FaStar className=' text-xl inline-block mr-2 ' />
                        <p className=' inline-block'> {4.5} </p>
                    </div>
                    <div>
                        <p className='column-category-item'>Value</p>
                        <FaStar className=' text-xl inline-block mr-2 ' />
                        <p className=' inline-block'> {4.3} </p>
                    </div>
                    <div>
                        <p className='column-category-item'>Recommendation</p>
                        <FaStar className=' text-xl inline-block mr-2 ' />
                        <p className=' inline-block'> {5.1} </p>
                    </div>
                </div>
            </div>

            <p className='spmLine3'></p>

            <div className='review-hold'>

                <div className='review-columns'>
                    <div className='column'>
                        {reviews.slice(0, 3).map((review, index) => (
                            <div key={index}>
                                <h3 className="text-lg font-bold uppercase">Comment {index + 1}</h3>
                                <p>{truncateReview(review)}</p>
                            </div>
                        ))}
                    </div>
                    <div className='column'>
                        {reviews.slice(3, 6).map((review, index) => (
                            <div key={index}>
                                <h3 className="text-lg font-bold uppercase">Comment {index + 4}</h3>
                                <p key={index}>{truncateReview(review)}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <div className='agg'>
                <label htmlFor="my-modal-5" className="modal-button spm-rev-btn rounded-2xl btn">Show All {reviews.length} Reviews</label>
                <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                <label htmlFor="my-modal-5" className="modal cursor-pointer">
                    <label className="modal-box relative" for="">
                        <FaStar className='modal-star' />
                        <p className='modal-review font-semibold'>{stars}, {reviews.length} reviews</p>
                        <img src={modalPic} className="modal-pic" />
                        <div className='modal-hold'>
                            {reviews.map((review, index) => (
                                <div key={index}>
                                    <h3 className="text-lg font-bold uppercase">~ Comment {index + 1}</h3>
                                    <p class="py-4">{review}</p>
                                </div>
                            ))}
                        </div>
                    </label>
                </label>
            </div>
            <p className='spmLine3'></p>
        </div>
    );
}

export default SinglePageMiddle;
