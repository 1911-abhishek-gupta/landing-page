
import React from "react";
import Title from "./images/title.jpg";

function Header(){
    return(
        <div className="Header">
        <section className="title" id="title">
        <nav className="navbar navbar-expand-lg">
       
            <a className="navbar-brand Brand" href="#title"> <i class="fa-solid fa-code "> </i>Codeext</a>
            
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#title">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#services">Services</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#pricing">Pricing</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#testimonial">Testimonials</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#blog">Blog</a>
                </li>
                <li>
                    <button type="button" class="btn btn-primary">FREE TRIAL</button>
                </li>

            </ul>
        </div>
        </nav>

        <div className="row home">
        <div className="col-md-6 home-txt">
            <h1>
               Codext one of the best system in SAAS.
            </h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <button type="button" class="btn btn-primary">Try a live demo</button>
        </div>

        <div className="col-md-6">
            <img class="title-image" src={Title} alt=""></img>
        </div>


        </div>

        </section>
        </div>
    )
       

    

}

export default Header;