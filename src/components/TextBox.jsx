import { useState } from "react";



export default function TextBox(props){
    const text = props.text;
    const width = props.width;

    const [InputValue, setInputValue] = useState(text);

    // setInputValue({text});
    

    const handleInputChange = (event)=>{
        setInputValue(event.target.value);
    }
    return(
       
         <input  type="text" className = 'text-box' value = {InputValue} onChange={handleInputChange} style = 
         {{

            width:width,
            borderColor: "#9E9E9E",
            borderWidth: "1px",
            borderStyle:"solid"
            
        
        
        }} />  
       
       
       
    )
    
}