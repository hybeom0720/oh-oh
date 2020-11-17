import React, { useEffect, useState } from "react";
import * as S from "./style";
function Indicator({ slideProps }) {
  const { totalSlides, currentSlide } = slideProps;
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    setSlides([]);
    for (let i = 0; i < totalSlides; i++) {
      setSlides((prevState) => [...prevState, 0]);
    }
  }, []);

  return (
    <S.IndicatorBlock>
      {slides.map((_, index) => (
        <S.IndicatorElement key={index} isSelected={index === currentSlide} />
      ))}
    </S.IndicatorBlock>
  );
}

export default Indicator;
