import React from 'react'
import '../styles/header.css'
import peakpx from '../images/peakpx.jpg'
import pirate from '../images/pirate.jpg'
const Header = () => {
    return (
        <>
            <div id="carouselExample" class="carousel slide mt-1">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src={peakpx} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://images6.alphacoders.com/948/948861.jpg" class="d-block w-100" alt="" />
                    </div>
                    <div class="carousel-item">
                        <img src={pirate} class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default Header