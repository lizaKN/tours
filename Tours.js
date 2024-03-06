import React from "react";
import Tour from './Tour';
import "./style.css";
const Tours = ({tours,removeTour}) => {
    return (
        <section>
            <div className="title">
            <h2>Our tours</h2>
            <div className="underline"></div>
            </div>
            <div className="tours">
                {tours.map((tour)=> {
                return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
                }
                )}
                
            </div>
        </section>
    ); 
};

export default Tours;