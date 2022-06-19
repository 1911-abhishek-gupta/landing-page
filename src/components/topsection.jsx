import React from "react";
import features from "./images/features.png";

function Topsection(){
    return(
        <div className="row topsection" id="topsection">
        <div className="col-md-6">
        <img className="top-section-image" src={features} alt=""></img>
        </div>

    <div className="col-md-6" style={{width:"450px"}}>
    <h1>
    It's helpful for operating system
    </h1>
    <ul>
        <li><h5><i class="fa-solid fa-arrows-turn-right topsecicon"></i>  Ultra fast &secure</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></li>
        <li><h5><i class="fa-solid fa-arrows-turn-right topsecicon"></i>  Allows Customization</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></li>
        <li><h5><i class="fa-solid fa-arrows-turn-right topsecicon"></i> Smart Contract</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,Lorem ipsum dolor sit amet, consectetur adipiscing elit</p></li>
        

    </ul>
    </div>

            
        </div>

    )
}

export default Topsection;