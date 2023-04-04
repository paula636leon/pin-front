import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import img3 from "./images/img3.png";

function Carousel() {
    return (
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="true"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={img1} class="d-block w-2 h-2" alt="1" />
            <div class="carousel-caption" style={{ textAlign: "center", backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
              <h3>Texto de título</h3>
              <p>Texto de descripción</p>
            </div>
          </div>
        
          <div class="carousel-item">
            <img src={img2} class="d-block w-2 h-2" alt="2" />
            <div class="carousel-caption" style={{ textAlign: "center", backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
              <h3>Texto de título</h3>
              <p>Texto de descripción</p>
            </div>
          </div>
          
          <div class="carousel-item">
            <img src={img3} class="d-block w-2 h-2" alt="3" />
            <div class="carousel-caption" style={{ textAlign: "center", backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
              <h3>Texto de título</h3>
              <p>Texto de descripción</p>
            </div>
          </div>
        </div>

        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    );
}; 

export default Carousel;