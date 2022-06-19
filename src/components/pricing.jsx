import React from "react";
import PricingCard from "./pricingCard";

function Pricing(){
    return(
        <div className="pricing" id="pricing">
        <h2>Choose your best pricing plan</h2>
        <div style={{textAlign:"left"}} class="form-check form-switch">
  <input  class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"></input>
  <label  class="form-check-label" for="flexSwitchCheckDefault">yearly</label>
</div>
     
            <div className="row">
           <PricingCard h="Start-up" cost="$10/mo" li1="Eazy customizable" li2="commercial licence" li3="single user licence" li4="support 24/7"/>
           <PricingCard h="Classic" cost="$30/mo" li1="Eazy customizable" li2="commercial licence" li3="5 user licence" li4="support 24/7"/>
           <PricingCard h="Start-up" cost="$49/mo" li1="Eazy customizable" li2="commercial licence" li3="single user licence" li4="support 24/7"/>
        </div>
        </div>
    )
}

export default Pricing;