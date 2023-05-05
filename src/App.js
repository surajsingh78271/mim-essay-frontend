// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Popup from "./components/popup";

function App() {
  const [pop, setPop] = useState(false);
  const [data, setData] = useState("");

  //  There are two state first one isOTP and second one is
  // they both are mandatory, so the value of both change simultaneously.
  const [isOTP,setIsOTP] = useState(false);
  const [OTP,setOTP] = useState(null);

  const handleSubmit = ()=>{
    if(data.length === 10 ){
      let oo = prompt("Enter the OTP if your want to autofill OTP & OTP should be 6 digit, otherwise you  will be write the OTP manually.")
      console.log(typeof(oo))
      if(oo != null && oo.length === 6){
        setIsOTP(true);
        setOTP(oo);
      }else{
        alert("Your OTP is not valid.")
      }
      
      setPop(true);
    }else{
      
      alert("Enter a valid number & must be 10 digit")
    }
  }

  return (
    <div className="App">
      {pop ? (<Popup data={data} isOTP={isOTP} otp={OTP} />) : (
        <header className="App-header">
          <input onChange={(e) => { setData(e.target.value);}} type="text" placeholder="Enter Your phone number" />
          <button
            onClick={() => {
              handleSubmit()

            }}
          >
            Click Me!
          </button>
        </header>
      )}
    </div>
  );
}

export default App;
