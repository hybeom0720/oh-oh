import React, { useState, useRef, useEffect } from "react";

import Button from "../../components/button/Button";
import { LARGE, SOLID, GHOST } from "../../constants/button";
import * as S from "./style";
import {
  FirstSlide,
  SecondSlide,
  ThirdSlide,
  Indicator,
  NextButton,
  PrevButton,
} from "./components/slide";

const TOTAL_SLIDES = 2;

function Intro({ goMainMap }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);

  const nextSlide = () => {
    if (currentSlide >= TOTAL_SLIDES) {
      setCurrentSlide(TOTAL_SLIDES);
    } else {
      setCurrentSlide((prevState) => prevState + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide <= 0) {
      setCurrentSlide(0);
    } else {
      setCurrentSlide((prevState) => prevState - 1);
    }
  };

  useEffect(() => {
    containerRef.current.style.transition = "all 0.2s ease-in-out";
    containerRef.current.style.transform = `translateX(-${
      (currentSlide * 100) / 3
    }%)`;
  }, [currentSlide]);

  const nextButtonProps = {
    size: LARGE,
    type: GHOST,
    content: "다음",
    onClick: nextSlide,
  };
  const agreeButtonProps = {
    size: LARGE,
    type: SOLID,
    content: "동의하고 시작하기",
    onClick: goMainMap,
  };
  const slideProps = {
    totalSlides: TOTAL_SLIDES + 1,
    currentSlide,
  };

  return (
    <S.IntroPage>
      <S.SlideBlock>
        <S.SlideContainer ref={containerRef}>
          <FirstSlide />
          <SecondSlide />
          <ThirdSlide />
        </S.SlideContainer>
      </S.SlideBlock>
      {currentSlide !== TOTAL_SLIDES && <NextButton onClick={nextSlide} />}
      {currentSlide !== 0 && <PrevButton onClick={prevSlide} />}
      <Indicator slideProps={slideProps} />
      <Button
        buttonProps={currentSlide === 2 ? agreeButtonProps : nextButtonProps}
      ></Button>
    </S.IntroPage>
  );
}

export default Intro;
