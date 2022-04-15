import React from 'react';
import Star from '../../images/icon-star.svg';
import './Rating.css';

export default function Rating() {
    return (
        <div className="container">
            <div className="star">
                <img src={Star} alt="Star Icon" />
            </div>

            <h2>How did we do?</h2>

            <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>

            <div className="rates">
                <div className="rate">
                    1
                </div>

                <div className="rate">
                    2
                </div>

                <div className="rate">
                    3
                </div>

                <div className="rate">
                    4
                </div>

                <div className="rate">
                    5
                </div>
            </div>

            <button className="submit">submit</button>
        </div>
    );
}