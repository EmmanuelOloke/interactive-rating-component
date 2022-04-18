import React from 'react';
import Star from '../../images/icon-star.svg';
import Thanks from '../../images/illustration-thank-you.svg';
import './Rating.css';

export default function Rating() {

    const addActive = () => {
        document.getElementsByClassName('rate').classList.remove('active');
        // document.getElementById(id).classList.add("active");
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
                    <span id="1" className="active rate" onClick={() => addActive()}>
                        1
                    </span>

                    <span id="2" className="rate" onClick={() => addActive()}>
                        2
                    </span>

                    <span id="3" className="rate" onClick={() => addActive()}>
                        3
                    </span>

                    <span id="4" className="rate" onClick={() => addActive()}>
                        4
                    </span>

                    <span id="5" className="rate" onClick={() => addActive()}>
                        5
                    </span>
                </div>

                <button className="submit">submit</button>
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