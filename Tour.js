import React,{useState} from "react";
import "./style.css";
const Tour = ({id,image,info,price,name,removeTour}) => {
    const [showFullDescription, setFullDescription] = useState(false); 
    return (<article className="tour">
        <img src={image} alt={name} />
        <footer>
            <div className="info">
                <h4>{name}</h4>
                <h4 className="price">${price}</h4>
            </div>
            <p>{showFullDescription? info:`${info.substring(0,250)}...`}     <button className="show" onClick={()=> setFullDescription(!showFullDescription)}>{showFullDescription?"Show less" : "Read more"}</button></p>

            <button className="delete" onClick={()=>removeTour(id)}>Not interested</button>
        </footer>
    </article>);
};

export default Tour;