
import { Add, ArrowLeft, ArrowRight, ThumbDown, ThumbUp, PlayArrow } from "@mui/icons-material"
import { useRef, useState } from "react"
import MovieCarousalItem from "./components/MovieCarousalItem"
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
                   <MovieCarousalItem index ={0}></MovieCarousalItem>
                   <MovieCarousalItem index ={1}></MovieCarousalItem>
                   <MovieCarousalItem index ={2}></MovieCarousalItem>
                   <MovieCarousalItem index ={3}></MovieCarousalItem>
                   <MovieCarousalItem index ={4}></MovieCarousalItem>
                   <MovieCarousalItem index ={5}></MovieCarousalItem>
                   <MovieCarousalItem index ={6}></MovieCarousalItem>
                </div>
                <ArrowRight className="arrow-right" onClick={() => handleArrowClick("right")}></ArrowRight>
            </div>
        </div>
    )
}
