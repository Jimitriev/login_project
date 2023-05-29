import React, { useState } from "react"

export default function Line(prop){

    const color = prop.color;
    
    if({color}.color == "checked"){
       
    return(
        
        <button className="check-line" style={{

            backgroundColor: "red",
            height: "2px"
            
        }}
        />

    )
    }
    else{
        return(
        
            <button className="check-line" style={{
    
                backgroundColor: "#BDBDBD",
                height: "1px"
                
            }}
            />
        )
    }
}