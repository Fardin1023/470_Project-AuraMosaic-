import styled from "styled-components";
import { footerData, socialLinksData } from "../../data/data";
import { Container } from "../../styles/themes/styles";
import { Link } from "react-router-dom";
import { staticimages } from "../../utils/images";
import { breakpoints, defaulttheme } from "../../styles/themes/default";

const FooterWrapper = styled.div`
  padding-top: 60px;
  padding-bottom: 32px;

  @media screen(max-width:${breakpoints.lg}) {
    padding-top: 30px;
    padding-bottom: 30px;
  }
  .footer-top {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    @media (max-width: ${breakpoints.md}) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: ${breakpoints.xs}) {
      grid-template-columns: 100%;
      text-align: center;
    }
  }
  .footer-item {
    &-title {
      margin-bottom: 8px;
    }
  }
  .ftr-links {
    .ftr-link-item {
      margin-bottom: 8px;

      a {
        color: ${defaulttheme.color_whitesmoke};
        &:hover {
          color: ${defaulttheme.color_sea_green};
        }
      }
    }
  }
  .footer-middle{
    padding:20px 0 32px 0;
    grid-template-columns:repeat(2,1fr);
    gap:20px;

    @media(max-width:${breakpoints.lg}){
    padding:20px 0;
    }
    @media(max-width:${breakpoints.xs}){
    grid-template-columns:100%;
    text-align:center;
    }
  }
    .ftr-social-links{
      column-gap:8px;
      @media(max-width:${breakpoints.xs}){
      justify-content:center;
      }
      .ftr-social-link{
        width:25px;
        height:25px;
        border-radius:4px;
      }
    }
    .ftr-app-links{
      .app-links-title{
        margin-bottom:12px;
      }
      .app-links-group{
        columns-gap:6px;
        @media(max-width:${breakpoints.sm}){
        flex-direction:column;
        align-items:flex-start;
      }
      @media(max-width:${breakpoints.xs}){
        flex-direction:row;
        justify-content:center;
        }  
      }
      a{
        img{
          width:120px;
          @media(max-width:${breakpoints.md}){
            width:100px;
            }
        }
      }
    }
    .footer-bottom{
      padding-top:36px;
      border-top:1px solid rgba(199, 11, 11, 0.97);
       @media(max-width:${breakpoints.lg}){
        padding-top:20px;
       } 
      }

`;
const Footer = () => {
  return (
    <FooterWrapper className="bg-outerspace">
      <Container className="container">
        <div className="footer-top grid">
          {footerData?.map((Footer) => {
            return (
              <div className="footer-item" key={Footer.id}>
                <h4 className="text-white text-lg footer-item-title">
                  {Footer.title}
                </h4>
                {Footer.links && (
                  <ul className="ftr-links">
                    {Footer.links?.map((link, index) => (
                      <li className="ftr-link-item" key={index}>
                        <Link to={link.url} className="text-white text-base">
                          {link.text}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
                {Footer.lists && (
                  <ul className="ftr-links">
                    {Footer.lists?.map((link, index) => (
                      <li
                        className="ftr-link-item text-white text-base"
                        key={index}
                      >
                        {link.text}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>
        <div className="footer-middle grid">
          <div className="ftr-social-links flex items-center">
            {socialLinksData?.map((socialLink) => {
              return (
                <Link
                  to={socialLink.site_url}
                  key={socialLink.id}
                  className="ftr-social-link bg-white flex items-center
                    justify-center"
                >
                  <i className={socialLink.site_icon}></i>
                </Link>
              );
            })}
          </div>
          <div className="ftr-app-links">
            <div className="app-links-group flex items-center">
              <Link to="/">
                <img src={staticimages.app_store} alt="" />
              </Link>
            </div>
          </div>
        </div>
        <div className="footer-bottom text-center">
          <p className="text-base text-white">
            Copyright; 2025
            <Link to="/" className="text-white">
              {" "}
              All rights reserved
            </Link>
          </p>
        </div>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
