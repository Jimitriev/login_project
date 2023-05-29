
import React from "react"
import TextBox from "./TextBox"
import '../styles/mainpage.css'
import Line from    './line'
export default function MainPage(){

    return(
       

        <div className="main-bg">
            <div className="main-box">
                <p className="headText">Start Your 14-Day Free Trial Today.</p>
                <p className="headText_bot">NO CREDIT CARD REQUIRED!</p>
                <div className="sm-box">
                    <TextBox text = {"First Name"} width = {"43%"}/>
                    <TextBox text = {"Last Name"}  width = {"43%"}/>
                </div>
                <TextBox  text = {"Last Name"}  width = {""}/>
                <TextBox text = {"Password"}  width = {""}/>
                <div className="line-box">
                    <Line color = {"checked"}/>
                    <Line color = {"unchecked"}/>
                    <Line color = {"unchecked"}/>
                </div>
                <p className="pw">Password Strength</p>
                <button className="Next">Next</button>
                <p className="underlined"><u>By Creating an Account, it means you agree to our<b className="bold"> Privacy Policy</b> and <b className="bold">Terms of Service</b></u></p>


            </div>  

        </div>

    )

}