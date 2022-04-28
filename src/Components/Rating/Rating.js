import React, { useState } from 'react';
import Star from '../../images/icon-star.svg';
import Thanks from '../../images/illustration-thank-you.svg';
import './Rating.css';

export default function Rating() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selected, setSelected] = useState(0);

  const changeSelected = (num) => {
    setSelected(num);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    <div className="container">
      {isSubmitted ? (
        <div className="thanks">
          <img className="mb" src={Thanks} alt="Thank you icon" />

          <p className="selected">You selected {selected} out of 5</p>
          <h2>Thank you!</h2>
          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesitate to get in touch!
          </p>
        </div>
      ) : (
        <div className="select">
          <div className="star">
            <img src={Star} alt="Star Icon" />
          </div>

          <h2>How did we do?</h2>

          <p>
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>

          <div className="rates">
            <span
              className={`rate ${selected === 1 && 'active'}`}
              onClick={() => changeSelected(1)}
            >
              1
            </span>

            <span
              className={`rate ${selected === 2 && 'active'}`}
              onClick={() => changeSelected(2)}
            >
              2
            </span>

            <span
              className={`rate ${selected === 3 && 'active'}`}
              onClick={() => changeSelected(3)}
            >
              3
            </span>

            <span
              className={`rate ${selected === 4 && 'active'}`}
              onClick={() => changeSelected(4)}
            >
              4
            </span>

            <span
              className={`rate ${selected === 5 && 'active'}`}
              onClick={() => changeSelected(5)}
            >
              5
            </span>
          </div>

          <button className="submit" onClick={handleSubmit}>
            submit
          </button>
        </div>
      )}
    </div>
  );
}
