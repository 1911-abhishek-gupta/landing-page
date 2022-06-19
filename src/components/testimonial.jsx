import React from "react";
import TestimonialCard from "./testimmonialCard";



function Testimonial(){
    return(<div className="testimonial" id="testimonial">
        <h2>Let's see our  Users Review</h2>
        <p style={{width:"800px",margin:"auto",padding:"30px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore,orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore </p>

        <div className="row">
            <TestimonialCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA0Kwxb669WK4JW7AauWd5KMi6XdrEnEERFg&usqp=CAU" name="Wilson Bergson" des="Marketing manager"/>
            <TestimonialCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHYtiiGB1UsacDa5pxWp4R8Nkko0daQB6Xg&usqp=CAU" name="Zaira Aminoff" des="manager"/>
            <TestimonialCard img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5-og0JEHRt1kcTcFt5wNOa9s7eDv7kKP8Kg&usqp=CAU" name="Ryan press" des="student"/>
        </div>
        
        </div>
    )
}

export default Testimonial;