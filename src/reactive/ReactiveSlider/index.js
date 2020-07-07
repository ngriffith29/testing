import React, {useEffect, useState} from "react";
import NextButton from "./NextButton";
import Bullets from "./Bullets";
import SlideTemplate from "./SlideTemplate";
import {useCarousel} from "./Core";
import "./style.css";




export default function ReactiveSlider(props) {
    let {slides, interval, height, width, isReverse, withBullets, withButtonNext} = props;
    if (!slides) {
        slides = []
    }

    if (!interval) {
        interval = 10000
    }

    const length = slides.length;

    const [animate50, setAnimate50] = useState(false);
    const [slideNumber, setSlideNumber, handlers, style] = useCarousel(length, interval);

    const slideSelected = slides[slideNumber];

    const renderSlide = (slideData, index) => {
        if (slideData.component) {
            return slideData.component
        }
        return <SlideTemplate slide={slideData} index={index}/>
    }

    useEffect(() => {
        setAnimate50(false)
        const id = setTimeout(() => setAnimate50(true), 50);
        return () => clearTimeout(id);
    }, [slideNumber]);


    if (!length) {
        return null
    }

    return (
        <div className="reactive-slider">
            <div className={"container-main " + (slideSelected.theme || "")} style={{width: width || "100%", height: height || "450px"}}>
                <div className="container-band " {...handlers} style={{...style, height: "100%"}}>
                    <div className="slide">
                        {renderSlide(slides[length - 1], length)}
                    </div>
                    {
                        slides.map((slide, index) => {
                            const selectedClass = (index === slideNumber) ? " selected" : ""
                            return (
                                <div key={index} className="slide">
                                    {renderSlide(slide, index + 1)}
                                </div>
                            )
                        })
                    }
                    <div className="slide">
                        {renderSlide(slides[0], 1)}
                    </div>
                </div>

                {
                    withButtonNext && length > 1 ?
                        <NextButton isActive={animate50} interval={interval} theme={slideSelected.theme} onClick={() => setSlideNumber((slideNumber + 1) % length)}/>
                        :
                        null
                }
                {
                    withBullets && length > 1 ?
                        <Bullets selected={slideNumber} onSelect={setSlideNumber} theme={slideSelected.theme} items={slides.map((v, i) => ({value: i}))}/>
                        :
                        null
                }
            </div>
        </div>
    )
}
