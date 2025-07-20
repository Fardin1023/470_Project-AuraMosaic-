import styled from "styled-components";
import { Section } from "../../styles/themes/styles";
import { Container } from "../../styles/themes/styles";
import { featuredData } from "../../data/data";
import { Link } from "react-router-dom";
import { breakpoints, defaulttheme } from "../../styles/themes/default";

const FeaturedContent = styled.div`
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  @media (max-width: ${breakpoints.lg}) {
    grid-template-columns: 100%;
    .feat-card {
      padding: 60px 28px;
      position: absolute;
      top: 0;
      left: 100;
      margin-left: 600px;
      max-width: 400px;
      color: ${defaulttheme.color_black};
    }
  }
`;
const FeaturedCardWrapper = styled.div`
  height: 520px;
  border-radius: 12px;
  width: auto;
  overflow: hidden;
  position: relative;
  background-color:rgba(0,0,0,0.25);
  box-shadow: 2px 2px 10px 0px rgba(0, 0, 0, 0.5);
  .feat-texttop {
    margin-bottom: 24px;
  }
    .feat-textlarge{
        font-size:38px;
        line-height:1.2;
        color:${defaulttheme.color_black}
    }
    .feat-textbottom{
        margin-top:10px;
        margin-bottom: 30px;
        font-size:35px;
        color:${defaulttheme.color_black}
    }
    .feat-card{
      padding: 60px 28px;
      position: absolute;
      top: 0;
      left: 100;
      max-width: 400px;
      color: ${defaulttheme.color_yellow_green};
      @media(max-width:${breakpoints.sm}){
        padding:16px;

      }
    }
    .feat-texttop{
      font-size:25px;
    }
    .feat-link{
        font-size: 22px;
        color: ${defaulttheme.color_jet};
    }
    .object-cover{
    @media(max-width: ${breakpoints.xl}){
        object-position: 73px 90px;
    }
    @media(max-width:${breakpoints.sm}){
        object-position: 0px 90px;
    }
    }
    .feat-link{
    position:relative;
    &::after{
        position:absolute;
        content:"";
        left:0;
        top:100%;
        height:1px;
        width:100%;
        background-color:${defaulttheme.color_black}

    }
    }

`;

const Featured = () => {
  return (
    <Section>
      <Container>
        <FeaturedContent className="grid">
          {featuredData?.map((featured) => {
            return (
              <FeaturedCardWrapper className="text-white" key={featured.id}>
                <img className="object-cover" src={featured.imgSource} />
                <div className="feat-card">
                  <p className="feat-texttop">{featured.topText}</p>
                  <h3 className="feat-textlarge">{featured.largeText}</h3>
                  <p className="feat-textbottom">{featured.bottomText}</p>
                  <Link to={featured.buttonLink} className="feat-link">
                    {featured.buttonText}
                  </Link>
                </div>
              </FeaturedCardWrapper>
            );
          })}
        </FeaturedContent>
      </Container>
    </Section>
  );
};

export default Featured;
