import styled from "styled-components";
import { breakpoints, defaulttheme } from "../../styles/themes/default";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { Container } from "../../styles/themes/styles";
import { bannerData } from "../../data/data";
import { BaseLinkWhite } from "../../styles/button";
import CustomNextArrow from "../../components/common/CustomNextArrow";
import CustomPreviousArrow from "../../components/common/CustomPreviousArrow";

const SectionHeroWrapper = styled.section`
  background-color: rgba(90, 59, 81, 0.55);
`;
const HeroSliderWrapper = styled.div`
  .custom-prevarrow {
    left: 30px;
    background-color: ${defaulttheme.color_white};
    svg {
      margin-top:5px;
      color: ${defaulttheme.color_gray};
    }
    @media(max-width:${breakpoints.md}){
    left:16px;
    }
  }
.custom-nextarrow {
    right: 30px;
    background-color: ${defaulttheme.color_white};
    svg {
      margin-top:5px;
      color: ${defaulttheme.color_gray};
    }
    @media(max-width:${breakpoints.md}){
    right:16px;
    }
  }
  
`;

const HeroSliderItemWrapper = styled.div`
  position: relative;
  height: 716px;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${defaulttheme.color_black_04};
  }
  img {
    display: block;
  }
`;

const HeroSlideContent = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  max-width: 1100px;
  z-index: 10;
  margin-top: 200px;
  font-size: 28px;
  letter-spacing: 0.315px;
  line-height: 1.5;
  margin-bottom: 20px;
  .hero-btn {
    height: 42px;
    min-width: 120px;
    margin-top: 20px;
    font-size: 18px;
    height: 46px;
    min-width: 160px;
    @media (max-width: ${breakpoints.md}) {
      margin-top: 12px;
    }
  }
  .container-text {
    max-width: 840px;
    margin-left: 0;
    color: ${defaulttheme.color_white};

    @media (max-width: ${breakpoints.xxl}) {
      margin-left: 80px;
    }
    @media (max-width: ${breakpoints.md}) {
      margin-left: 16px;
      margin-right: 16px;
    }
    @media (max-width: ${breakpoints.sm}) {
      margin: 0;
      text-align: center;
    }
    .hero-texttop {
      font-size: 32px;
      @media (max-width: ${breakpoints.lg}) {
        font-size: 26px;
      }
    }
    .hero-text {
      font-size: 78px;
      letter-spacing: 0.315px;
      line-height: 1.2;
      margin-bottom: 20px;

      @media (max-width: ${breakpoints.lg}) {
        font-size: 60px;
      }
      @media (max-width: ${breakpoints.lg}) {
        font-size: 48px;
      }
      @media (max-width: ${breakpoints.lg}) {
        font-size: 36px;
      }
      @media (max-width: ${breakpoints.lg}) {
        font-size: 32px;
      }
    }
    .hero-textbottom {
      font-size: 26px;
      margin-bottom: 24px;

      @media (max-width: ${breakpoints.lg}) {
        font-size: 20px;
      }
    }
  }
`;
const Hero = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true,
        },
      },
    ],
  };
  return (
    <SectionHeroWrapper>
      <HeroSliderWrapper>
        <Slider
          nextArrow={<CustomNextArrow />}
          prevArrow={<CustomPreviousArrow />}
          {...settings}
        >
          {bannerData?.map((banner) => {
            return (
              <HeroSliderItemWrapper key={banner.id}>
                <img src={banner.imgSource} className="object-fit-cover" />
                <HeroSlideContent className="flex items-center w-full">
                  <Container className="container-text">
                    <p className="hero-texttop">{banner.topText}</p>
                    <h2 className="hero-text">{banner.titleText}</h2>
                    <p className="hero-textbottom">{banner.bottomText}</p>
                    <BaseLinkWhite to={banner.buttonLink} className="hero-btn">
                      {banner.buttonText}
                    </BaseLinkWhite>
                  </Container>
                </HeroSlideContent>
              </HeroSliderItemWrapper>
            );
          })}
        </Slider>
      </HeroSliderWrapper>
    </SectionHeroWrapper>
  );
};

export default Hero;
