import React from 'react'

const Carousel = () => {
  return (
    <div className="container my-5 d-flex justify-content-center">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
        style={{
          width: '600px',
          borderRadius: '10px',
          overflow: 'hidden',
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
        }}>
        {/* Indicateurs */}
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/delivery1.jpeg"
              className="d-block w-100"
              alt="Slide 1"
              style={{ height: '300px', objectFit: 'cover' }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/delivery4.png"
              className="d-block w-100"
              alt="Slide 2"
              style={{ height: '300px', objectFit: 'cover' }}
            />
          </div>
          <div className="carousel-item">
            <img
              src="/delivery5.jpg"
              className="d-block w-100"
              alt="Slide 3"
              style={{ height: '300px', objectFit: 'cover' }}
            />
          </div>
        </div>

        {/* Contrôles */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev">
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next">
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Carousel
