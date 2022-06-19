import React from "react";

function Services(){
return(
    <div className="services" id="services">
        <h1>
            We provide best Features for customers
        </h1>
        <div className="row">
            <div className="Service-box col-lg-3">
            <i class="fa-solid fa-file-code service-icon"></i>
            <h3>Clean code</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </div>

            <div className="Service-box col-lg-3">
            <i class="fa-solid fa-chart-area service-icon"></i>
            <h3>Data Analytic</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            </p>
            </div>

            <div className="Service-box col-lg-3">
            <i class="fa-solid fa-file-shield service-icon"></i>
            <h3>Fully secured</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </div>

            <div className="Service-box col-lg-3">
            <i class="fa-solid fa-headset service-icon"></i>
            <h3>24/7 support</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
            </div>
        </div>

    </div>
)
}

export default Services;
