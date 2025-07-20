import styled from "styled-components";
import { Container, Section } from "../../styles/themes/styles";
import Title from "../../components/common/Title";
import CustomNextArrow from "../../components/common/CustomNextArrow";
import CustomPreviousArrow from "../../components/common/CustomPreviousArrow";
import { newArrivalData } from "../../data/data";
import Slider from "react-slick";
import { commonCardStyles } from "../../styles/card";
import { breakpoints } from "../../styles/themes/default";
const ProductCardBoxWrapper = styled.div`
    ${commonCardStyles}
    .product-img{
        height:262px;
        width:262px;
    }
    @media(max-wdith:${breakpoints.sm}){
        padding-left:6px;
        padding-right:6px;
    }
`;
const ArrivalSlideWrapper = styled.div`
    .custom-prevarrow{
        top:43%;
        left:-18px;
        @media(max-width:${breakpoints.xxl}){
            left:24px;
        }
        @media(max-width:${breakpoints.xs}){
            left:4px;
        }
    }
    .custom-nextarrow{
        top:43%;
        right:-18px;
        @media(max-width:${breakpoints.xxl}){
            right:24px;
        }
        @media(max-width:${breakpoints.xs}){
            right:4px;
        }
    }

`;

const NewArrival = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true,
  };
  return (
    <Section>
      <Container>
        <Title titleText={"New Arrival"} />
        <ArrivalSlideWrapper>
          <Slider
            nextArrow={<CustomNextArrow />}
            prevArrow={<CustomPreviousArrow />}
            {...settings}
          >
            {newArrivalData?.map((newArrival) => {
              return (
                <ProductCardBoxWrapper key={newArrival.id}>
                  <div className="product-img">
                    <img className="object-fit" src={newArrival.imgSource} />
                  </div>
                  <div className="product-info">
                    <p className="font-bold">{newArrival.title}</p>
                  </div>
                </ProductCardBoxWrapper>
              );
            })}
          </Slider>
        </ArrivalSlideWrapper>
      </Container>
    </Section>
  );
};

export default NewArrival;
