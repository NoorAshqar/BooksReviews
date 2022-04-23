import React from 'react'
import { Container } from 'react-bootstrap';
import {
  Link
} from "react-router-dom";
import './Slider.css';
import Carousel from "react-elastic-carousel"
function SlideRow({genre,theme}) {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 545, itemsToShow: 3 },
    { width: 801, itemsToShow: 5 },
  ];
  return (
    <Container fluid className={theme === "white" ? "slider-con white" : "slider-con black"}  style={{backgroundImage: `url(${genre.background})`}}>
        <Container>
            <h2>{genre.title}</h2>
          <Carousel showArrows={true} breakPoints={breakPoints}>
            {genre.books.map((item,i) => {
              return (
                <div className="book-card" key={i}>
                  <Link to="/details" state={{ id: item.id }}>
                  <img src={item.image}></img>
                  </Link>
                  <p className="book-title">{item.title}</p>
                  <p className="book-author">BY {item.author}</p>
                  <p className="book-reviewedBy">reviewed By {item.reviewedBy}</p>
                </div>
                
              )
            })}
          </Carousel>
        </Container>
    </Container>
  );
}

export default SlideRow