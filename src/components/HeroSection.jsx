import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const HeroSection = () => {

  // Slider Images

  const sliderImages = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Media/1/toys/Desktop_tall_Hero_3000x1200_RC-Cars_1._CB784186419_.jpg",

    "https://images-eu.ssl-images-amazon.com/images/G/31/2025/GW/UNREC/PC/78269._CB785061629_.jpg",

    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/CEPC/Dec/amazonspecial/BFCM25_GW_PC_Hero._CB775393558_.jpg",
  ];

  // Slider State

  const [current, setCurrent] = useState(0);

  // Next Slide

  const nextSlide = () => {
    setCurrent(
      current === sliderImages.length - 1
        ? 0
        : current + 1
    );
  };

  // Previous Slide

  const prevSlide = () => {
    setCurrent(
      current === 0
        ? sliderImages.length - 1
        : current - 1
    );
  };

  // Cards Data

  const cards = [
    {
      title: "Continue shopping deals",
      items: [
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=300",
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300",
        "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=300",
        "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=300",
      ],
    },

    {
      title: "Appliances for your home | Up to 55% off",
      items: [
        "https://images.unsplash.com/photo-1564540583246-934409427776?w=300",
        "https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=300",
        "https://images.unsplash.com/photo-1586208958839-06c17cacdf08?w=300",
        "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?w=300",
      ],
    },

    {
      title: "Revamp your home in style",
      items: [
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=300",
        "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=300",
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=300",
        "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=300",
      ],
    },
  ];

  return (
    <div className="heroContainer">

      {/* Background Slider */}

      <div className="heroSlider">

        {/* Left Button */}

        <button
          className="slideBtn leftBtn"
          onClick={prevSlide}
        >
          <FaChevronLeft />
        </button>

        {/* Slider Image */}

        <img
          src={sliderImages[current]}
          alt="banner"
          className="heroImage"
        />

        {/* Right Button */}

        <button
          className="slideBtn rightBtn"
          onClick={nextSlide}
        >
          <FaChevronRight />
        </button>

      </div>

      {/* Cards */}

      <div className="cardContainer">

        {cards.map((card, index) => (
          <div className="heroCard" key={index}>

            <h2>{card.title}</h2>

            <div className="cardGrid">

              {card.items.map((img, i) => (
                <img
                  src={img}
                  alt="product"
                  key={i}
                />
              ))}

            </div>

          </div>
        ))}

        {/* Sign In Card */}

        <div className="signinCard">

          <h2>
            Sign in for your best experience
          </h2>

          <button>
            Sign in securely
          </button>

        </div>

      </div>

    </div>
  );
};

export default HeroSection;