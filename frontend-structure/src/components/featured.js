import React from 'react';
import Slider from 'react-slick';

const settings = {
    arrows:true,
    dots:true,
    infinite:true,
    speed:500,
    slideToShow:1,
    slideToScroll:1
}

const generateSlides = ({slides}) => {
    if(slides) {
        return (
            <Slider {...settings} id="slider-pannu">
                {slides.map((item) =>{
                    return(
                       
                        <div key={item.id}  >                         
                       
                        <div className="item_slider" style={{background:`url(/images/covers/${item.cover})`}}>
                        
                        <div className="caption">
                            <h4> {item.topic}</h4>
                            <p>{item.title}</p>
                        </div>
                        {/* <div className="sliderArrow">
                        <a className="prev" onClick="plusSlides(-1)"><i className="fas fa-angle-left fa-3x"></i></a>
                        <a className="next" onClick="plusSlides(1)"><i className="fas fa-angle-right fa-3x"></i></a>
                        </div> */}
                        </div>
                        </div>
                    )
                })}
            </Slider>
        )
    }
}

const Featured = (props) => {
    return (
        <div>
           {generateSlides(props)}
        </div>
    )
}

export default Featured;