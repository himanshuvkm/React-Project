import React from "react";
import Accordian from "./component/Accordian";
import Star from './component/Star'
import ImageSlider from "./component/Image-slider";

function App (){
    return(
        <div>
         <Accordian/>
         <Star noOfStars={10} />
         <ImageSlider url={'https://picsum.photos/v2/list'} page={4} limit={10}   />
        </div>
    )
}
export default App;