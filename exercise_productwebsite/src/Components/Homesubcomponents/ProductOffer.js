import React, { useState } from 'react'
import { proOffer } from '../Datathings/ProductOffer.data'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '.././../App.css';
export default function ProductOffer() {
  const [items, setitems] = useState(proOffer)
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  
  return (
    // <div style={{ width: '75%', margin: 'auto' }}>
    //   <div style={{ marginTop: "20px" }}>
    //     <Slider {...settings}>

    //       {items.map((d) => (
    //         <div key={d.id} style={{ backgroundColor:"", height: '280px', color: 'black', border: '1px black solid' }}>
    //           <div style={{ height: '220px', borderBottom:"1px black solid", backgroundColor: '#33ffff', display: 'flex', justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: '1rem',borderTopRightRadius: '1rem' }}>
    //             <img src={d.image} alt={d.Name} style={{ height: "200px", width: "200px" }}></img>
    //           </div>
    //           <div className='flex flex-col items-center justify-center gap-4 p-4' style={{ backgroundColor:"aqua", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "4px", padding: "4px",borderBottomLeftRadius: '1rem',borderBottomRightRadius: '1rem' }}>
    //             <p style={{ fontSize: '1.25rem', fontWeight: '600' }}>{d.Name}</p>
    //             <p style={{ textAlign: 'center' }}>{d.price}</p>

    //           </div>
    //         </div>

    //       ))}
    //     </Slider>
    //   </div>
    // </div>
    <div className="product-offer-container">
      <Slider {...settings}>
        {items.map((d) => (
          <div key={d.id} className="product-card">
            <div className="card-image">
              <img src={d.image} alt={d.Name} />
            </div>
            <div className="card-details">
              <p className="card-title">{d.Name}</p>
              <p className="card-price">{d.price}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}


