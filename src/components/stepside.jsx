

import React from "react";
import '../styles/sidebox.css'
// import bgimg from "../icons/rightBg.svg"
import checkedIcon from "../icons/checkedIcon.svg"
import nowIcon from "../icons/nowIcon.svg"
import uncheckedIcon from "../icons/uncheckedIcon.svg"
import ProgressIndicator from "./progressbarIndicator";



export default function StepSide(){
    return(
        <div class = "background">
            
            <div className="side-Box">

                <ProgressIndicator />
           </div>
        </div>
    )
}