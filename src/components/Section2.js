import React from "react";

export default function Section2() {
  return (
    <div className="bg_section2">
      <div className="container flexR">

        <div className="section2R">
          <video autoPlay loop width="530">
            <source src="/img/phone.mp4" type="video/mp4" />
            vidéo non prispas en charge .
          </video>  
          <div className="fleche">
          <img src="/img/fleche.png" />
            <p>Featured Projet</p>
            <h5>Tryotel App</h5>
          
          </div>
        </div>   

        <div className="section2L">
          <h2>Mon travail</h2>
          <p>
            But you're good, Marty, you're really good. And this audition tape
            of your is great, you gotta send it in to the record company. It's
            like Doc's always saying. Oh, what I meant to day was- I got enough
            practical jokes for one evening. Good night, fut
          </p>
                    
        </div> 
              
      </div>    
    </div>
  );
}
