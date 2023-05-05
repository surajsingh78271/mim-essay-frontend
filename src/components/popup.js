import React, { useEffect } from "react";
import "./popup.css";
import { useState } from "react";

const Popup = (props) => {
  const [otp, setOtp] = useState(0);
  
  const [flag, setFlag] = useState(0);

  const handleFocus = (val, e) => {
    if (e.key === "Backspace") {
      val = val - 2;
      if (val < 1) {
        if (val !== 0) document.getElementById(`input-${val}`).blur();
      } else {
        document.getElementById(`input-${val}`).focus();
      }
    } else {
      setOtp(otp * 10 + Number(e.target.value))
      if (val > 6) {
        document.getElementById(`input-${6}`).blur();
      } else {
        document.getElementById(`input-${val}`).focus();
      }
    }
  };
  const call = () => {
    if (otp !== 0) {
      if (flag < 2) {
        setFlag(flag + 1);
      }

      let tempOTP = otp;
      for (let index = 6; index >= 1; index--) {
        document.getElementById(`input-${index}`).value = tempOTP % 10;
        tempOTP = Math.floor(tempOTP / 10);
      }
    }
  };
  useEffect(() => {
    if (props.isOTP !== false && flag < 1) {
      setOtp(props.otp);
      call();
      document.getElementById(`input-6`).focus();
    }
  }, [otp]);

  return (
    <div className="popup">
      <div className="content">
        <h1>Phone Verification</h1>

        <div className="popup-content">
          <h2>Enter the OTP you Recived on {Math.floor((props.data)/100000)}-XXXXX</h2>
          <div className="div-input">
            <input
              id="input-1"
              className="popup-input"
              type="number"
              autoFocus
              onKeyUp={(e) => {
                handleFocus(2, e);
              }}
            />
            <input
              id="input-2"
              className="popup-input"
              type="number"
              onKeyUp={(e) => {
                handleFocus(3, e);
              }}
            />
            <input
              id="input-3"
              className="popup-input"
              type="number"
              onKeyUp={(e) => {
                handleFocus(4, e);
              }}
            />
            <input
              id="input-4"
              className="popup-input"
              type="number"
              onKeyUp={(e) => {
                handleFocus(5, e);
              }}
            />
            <input
              id="input-5"
              className="popup-input"
              type="number"
              onKeyUp={(e) => {
                handleFocus(6, e);
              }}
            />
            <input
              id="input-6"
              className="popup-input"
              type="number"
              onKeyUp={(e) => {
                handleFocus(7, e);
              }}
            />
          </div>
          <div className="change">
            <p>Change Number</p>
            <p>Re-send OTP</p>
          </div>
          <button className="verify">Verify Phone Number</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
