import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


const ProductSlider = () => {

  const products = [
    "https://images.unsplash.com/photo-1593618998160-e34014e67546?w=400",
    "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400",
    "https://images.unsplash.com/photo-1603048719537-9ecb4f12f6?w=400",
    "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400",
    "https://images.unsplash.com/photo-1503602642458-232111445657?w=400",
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
    "https://images.unsplash.com/photo-1514996937319-344454492b37?w=400",
  ];

  const [current, setCurrent] = useState(0);

  // Next Slide

  const nextSlide = () => {

    if (current < products.length - 5) {
      setCurrent(current + 1);
    } else {
      setCurrent(0);
    }
  };

  // Previous Slide

  const prevSlide = () => {

    if (current > 0) {
      setCurrent(current - 1);
    } else {
      setCurrent(products.length - 5);
    }
  };

  // Auto Slide

  useEffect(() => {

    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="productSection">

      {/* Header */}

      <div className="sectionHeader">

        <h2>Related to items you've viewed</h2>

        <span>See more</span>

      </div>

      {/* Slider */}

      <div className="sliderContainer">

        {/* Left Button */}

        <button
          className="sliderBtn left"
          onClick={prevSlide}
        >
          <FaChevronLeft />
        </button>

        {/* Products */}

        <div className="productSlider">

          {products
            .slice(current, current + 5)
            .map((item, index) => (

              <div
                className="productCard"
                key={index}
              >
                <img
                  src={item}
                  alt="product"
                />
              </div>

          ))}

        </div>

        {/* Right Button */}

        <button
          className="sliderBtn right"
          onClick={nextSlide}
        >
          <FaChevronRight />
        </button>

      </div>

    </div>
  );
};

export default ProductSlider;