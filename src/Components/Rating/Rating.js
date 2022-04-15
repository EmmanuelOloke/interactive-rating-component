import React from 'react';
import Star from '../../images/icon-star.svg';
import Thanks from '../../images/illustration-thank-you.svg';
import './Rating.css';

export default function Rating() {

    const showThanks = () => {
        console.log("Say Thanks");
    }

    return (
        <div className="container">
            <div className="select">
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

                <button className="submit" onClick={() => showThanks()}>submit</button>
            </div>

            <div className="thanks">
                <img className="mb" src={Thanks} alt="Thank you icon" />

                <p className="selected">
                    You selected 4 out of 5
                </p>
                <h2>Thank you!</h2>
                <p>We appreciate you taking the time to give a rating.
                    If you ever need more support, don't hesitate to
                    get in touch!</p>
            </div>
        </div>
    );
}