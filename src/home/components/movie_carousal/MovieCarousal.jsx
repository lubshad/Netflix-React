
import { ArrowLeft, ArrowRight } from "@mui/icons-material"
import { useRef, useState } from "react"
import "./movie_carousal.scss"

export default function MovieCarousal() {

    
    const [rightClickCounter, setRightClickCounter] = useState(0)
    const carousalItemsReference = useRef()


    const handleArrowClick = (direction) => {
        const visibleItems = Math.floor(window.innerWidth / 320)
        const totalItems = carousalItemsReference.current.getElementsByClassName('carousal-item').length
        const allowableClicks = totalItems-visibleItems
        const currentPosition = carousalItemsReference.current.getBoundingClientRect().x
        const newPosition = currentPosition + (direction == "left" ? +320 : -320)
        carousalItemsReference.current.style.transform = `translateX(${newPosition}px)`
    }

    return (
        <div className='movie-carousal'>
            <h2 className="carousal-title">Continue Watching</h2>
            <div className="carousal-slider">
                <ArrowLeft className="arrow-left" onClick={() => handleArrowClick("left")}></ArrowLeft>
                <div className="carousal-items" ref={carousalItemsReference}>
                    <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg" alt="" className="carousal-item" />
                    <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg" alt="" className="carousal-item" />
                    <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg" alt="" className="carousal-item" />
                    <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg" alt="" className="carousal-item" />
                    <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg" alt="" className="carousal-item" />
                    <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg" alt="" className="carousal-item" />
                    <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg" alt="" className="carousal-item" />
                    <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg" alt="" className="carousal-item" />
                    <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg" alt="" className="carousal-item" />
                    <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg" alt="" className="carousal-item" />
                    <img src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg" alt="" className="carousal-item" />
                </div>
                <ArrowRight className="arrow-right" onClick={() => handleArrowClick("right")}></ArrowRight>
            </div>
        </div>
    )
}
