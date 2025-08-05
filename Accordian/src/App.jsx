import React from "react";
import Accordian from "./component/Accordian/Accordian";
import Star from './component/StarRating/Star'
import ImageSlider from "./component/ImageSlider/Image-slider";
import LoadMore from "./component/LoadMorebtn/loadmorebtn";

function App (){
    return(
        <div>
         <Accordian/>
         <Star noOfStars={10} />
         <ImageSlider url={'https://picsum.photos/v2/list'} page={4} limit={10}   />
         <LoadMore/>
        </div>
    )
}
export default App;