import React from "react";
import Header from "./header";
import Topsection from "./topsection";
import Services from "./services";
import Pricing from "./pricing";
import Testimonial from "./testimonial";
import News from "./news";
import Footer from "./footer";

function App(){
    return(<div>
        <Header/>
        <Topsection />
        <Services />
        <Pricing/>
        <Testimonial/>
        <News/>
        <Footer/>

        </div>
    )
}

export default App;