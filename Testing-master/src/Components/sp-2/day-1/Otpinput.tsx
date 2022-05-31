import React, { useRef, useState } from "react";
import "./otp.css"
type OtpInputType = {
  totalInput: number;
  onChange: (otp: string) => void
};

export const Otpinput = ({ totalInput, onChange }: OtpInputType) => {
  const inputRef = useRef<HTMLInputElement[]>([]); //{ current: [Input, Input, Input, Input]}
  const [otp, setOtp] = useState<string>("")
  return (
    <div>
          {new Array(totalInput).fill(1).map((_,index) =>(
        <input
            onChange={(e)=> {
                setOtp(otp+e.target.value)
            }}
            // onPaste={(e) =>{
            //     console.log(e.clipboardData.getData('Text'));

            // }}

        onKeyUp={(e) => {
            if(e.code === "Backspace"){
                inputRef.current[index - 1].focus();
                inputRef.current[index - 1].select();
            }
            else if(index < 0  || index >  inputRef.current.length){
                inputRef.current[index + 1].focus();
            }
            else{
                inputRef.current[index + 1].focus();
            }

            onChange(otp);
            
            
        }}
             ref={(element) => {
                //  checking null
            if (inputRef.current && element) {
              inputRef.current[index] = element;
            }
          }}
        type="text"
          className="otpInput"
          maxLength={1}
          key={index}

        />
      ))}
    </div>
  );
};

// vite or codesandbox
// props types rstrict the proptype
