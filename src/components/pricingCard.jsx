import React from "react";

function PricingCard(props){
    return(
        
        <div className="col-lg-4 pricing-box">
        <h5>{props.h}</h5>
        <hr style={{width:"70%",margin:"auto"}}></hr>
        
        <h2>{props.cost}</h2>
        <ul>
            <li>{props.li1}</li>
            <li>{props.li2}</li>
            <li>{props.li3}</li>
            <li>{props.li4}</li>
        </ul>
        <button type="button" class="btn btn-outline-primary">Try This Package</button>

        </div>
    )
}

export default PricingCard;