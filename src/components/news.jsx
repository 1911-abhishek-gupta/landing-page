import React from "react";
import Team from "./images/team.jpg";
import Team2 from "./images/team2.jpg"

function News(){
    return(

        <div className="news" id="blog">
        <h1>
            Latest insight news
        </h1>
        <div className="row ">
        <div className="col-lg-6 news-box">
        <img className="blogImg" src={Team} alt=""></img>
        <div className="row">
            <div className="col-lg-4"><p>Our creative team</p></div>
            <div className="col-lg-4"><p>17 june,2021</p></div>
            <div className="col-lg-4"><p>by steve smith</p></div>
        </div>
        <h3>Running remote offsites and onboardings</h3>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip e</p>
            <button type="button" class="btn btn-primary">Continue</button>
        </div>

        <div className="col-lg-6 news-box">
        <img className="blogImg" src={Team2} alt=""></img>
        <div className="row">
            <div className="col-lg-4"><p>Create presentation</p></div>
            <div className="col-lg-4"><p>17 june,2021</p></div>
            <div className="col-lg-4"><p>by Naman gupta</p></div>
        </div>
        <h3>A new way to look& new ways to coloborate</h3>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip e</p>
            <button type="button" class="btn btn-primary">Continue</button>
        </div>

        </div>
           

        </div>

    )
}

export default News;