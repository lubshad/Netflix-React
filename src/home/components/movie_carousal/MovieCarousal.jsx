
import { Add, ArrowLeft, ArrowRight, ThumbDown, ThumbUp, PlayArrow } from "@mui/icons-material"
import { useRef, useState } from "react"
import "./movie_carousal.scss"

export default function MovieCarousal() {


    const [sliderNumber, setsliderNumber] = useState(0)
    const carousalItemsReference = useRef()


    const handleArrowClick = (direction) => {
        if (sliderNumber == 0 & direction == "left") return
        const visibleItems = Math.floor(window.innerWidth / 320)
        const totalItems = carousalItemsReference.current.getElementsByClassName('carousal-item').length
        if (direction == "right" & (totalItems - sliderNumber) <= visibleItems) return
        const currentPosition = carousalItemsReference.current.getBoundingClientRect().x
        const newPosition = currentPosition + (direction == "left" ? +320 : -320)
        carousalItemsReference.current.style.transform = `translateX(${newPosition}px)`
        setsliderNumber(direction == "right" ? sliderNumber + 1 : sliderNumber - 1)
    }

    return (
        <div className='movie-carousal'>
            <h2 className="carousal-title">Continue Watching</h2>
            <div className="carousal-slider">
                <ArrowLeft className={sliderNumber > 0 ? "arrow-left active" : "arrow-left"} onClick={() => handleArrowClick("left")}></ArrowLeft>
                <div className="carousal-items" ref={carousalItemsReference}>
                    <div className="carousal-item">
                        <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg" alt="" className="carousal-item-image" />
                        <div className="highlighted-carousal-item">
                            <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg" alt="" className="heighlighted-item-image" />
                            <div className="heighlighted-item-action-buttons">
                                <PlayArrow className="heighlighted-item-action-button"></PlayArrow>
                                <Add className="heighlighted-item-action-button"></Add>
                                <ThumbUp className="heighlighted-item-action-button"></ThumbUp>
                                <ThumbDown className="heighlighted-item-action-button"></ThumbDown>
                            </div>
                            <p className="highlighted-item-description">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem dolore alias adipisci tempore amet officia labore neque, accusamus nihil provident sapiente corporis. Consequuntur temporibus repellendus, quasi suscipit quo fuga molestiae?
                            </p>
                        </div>
                    </div>
                </div>
                <ArrowRight className="arrow-right" onClick={() => handleArrowClick("right")}></ArrowRight>
            </div>
        </div>
    )
}
