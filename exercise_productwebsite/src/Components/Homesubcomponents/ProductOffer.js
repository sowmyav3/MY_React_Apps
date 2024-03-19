import React, { useState } from 'react'
import { proOffer } from '../Datathings/ProductOffer.data'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '.././../App.css';
import { Link } from 'react-router-dom';
import zIndex from '@mui/material/styles/zIndex';
export default function ProductOffer() {
  const [items, setitems] = useState(proOffer)
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
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
    <div style={{ width: '85%', margin: 'auto' }}>
      <p style={{ color: "black", fontSize: "25px", fontWeight: "bold" }}>Offers
        <Link to="" style={{ fontSize: "14px", paddingLeft: "67rem" }}>
          see more &gt;&gt;
        </Link>
      </p>
      <div style={{ marginTop: "20px" }}>
        <Slider {...settings}>
          {items.map((d) => (
            <div key={d.id} style={{ height: 'auto', color: 'black', }}>
              <div style={{ height: '220px', borderBottom: "1px black solid", borderLeft: "1px rgba(0, 0, 0, 0.26) solid", borderRight: "1px rgba(0, 0, 0, 0.26) solid", borderTop: "1px rgba(0, 0, 0, 0.26) solid", backgroundColor: '#33ffff', display: 'flex', justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem' }}>
                <img src={d.image} alt={d.Name} style={{ height: "200px", width: "200px", }}></img>
                {/* <div class="badges">
                  <h2 class="badge badge-new">{d.discountpercent}</h2>
                </div> */}
              </div>
              <div style={{ height: "auto", borderLeft: "1px rgba(0, 0, 0, 0.26) solid", borderRight: "1px rgba(0, 0, 0, 0.26) solid", borderBottom: "1px rgba(0, 0, 0, 0.26) solid", backgroundColor: "aqua", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", borderBottomLeftRadius: '1rem', borderBottomRightRadius: '1rem' }}>
                <p style={{ fontSize: '1.25rem', fontWeight: '600' }}>{d.Name}</p>
                <p> <b>Offer price:</b>  &#8377;{d.discountprice} </p>
                <p style={{ textAlign: 'center', textDecoration: 'line-through' }}>M.R.P: &#8377;{d.price}</p>

              </div>
            </div>

          ))}
        </Slider>
      </div>
    </div>
    // <div className="product-offer-container">
    //   <Slider {...settings}>
    //     {items.map((d) => (
    //       <div key={d.id} className="product-card">
    //         <div className="card-image">
    //           <img src={d.image} alt={d.Name} />
    //         </div>
    //         <div className="card-details">
    //           <p className="card-title">{d.Name}</p>
    //           <p className="card-price">{d.price}</p>
    //         </div>
    //       </div>
    //     ))}
    //   </Slider>
    // </div>
  )
}


