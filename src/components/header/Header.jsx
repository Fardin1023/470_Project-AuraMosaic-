import styled from "styled-components";
import { HeaderMainWrapper, SiteBrandWrapper } from "../../styles/header";
import { staticimages } from "../../utils/images";
import { navMenuData } from "../../data/data";
import { InputGroupWrapper } from "../../styles/themes/form";
import { useLocation } from "react-router-dom";
import { breakpoints, defaulttheme } from "../../styles/themes/default";
import { Container } from "../../styles/themes/styles";
import { Link } from "react-router-dom";
import { Input } from "../../styles/themes/form";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../redux/slices/sidebarSlice";
const NavigationAndSearchWrapper = styled.div`
  column-gap: 20px;
  .search-form{
    @media(max-width:${breakpoints.lg}){
    width: 100%;
    max-width: 500px;
}
    @media(max-width:${breakpoints.sm}){
    display:none;
    }
    .input-group{
      min-width:320px;
      .input-control{
        @media(max-width:${breakpoints.sm}){
        display:none;
        }
      }
        @media(max-width:${breakpoints.xl}){
          min-width:160px;
          }
        @media(max-width:${breakpoints.sm}){
        min-width:auto;
        grid-template-columns:100%;
        }
      @media(max-width:${breakpoints.lg}){
        width:100%;
        justify-content:flex-end;
      }
    }

`;

const NavigationMenuWrapper = styled.nav`
  .nav-menu-list {
    margin-left: 20px;
    @media (max-width: ${breakpoints.lg}) {
      flex-direction: row;
    }
  }
  .nav-menu-item {
    margin-right: 20px;
    margin-left: 20px;

    @media (max-width: ${breakpoints.xl}) {
      margin-left: 16px;
      margin-right: 16px;
    }
  }
  .nav-menu-link {
    &.active {
      color: ${defaulttheme.color_outerspace};
      font-weight: 800;
    }
    &:hover {
      color: ${defaulttheme.color_red};
    }
    @media (max-width: ${breakpoints.lg}) {
      position: relative;
      top: 0;
      right: 0;
      width: 260px;
      background: ${defaulttheme.color_white};
      height: 100%;
      z-index: 999;
    }
  }
`;

const IconLinkWrapper = styled.div`
  column-gap: 18px;
  .icon-link {
    width: 36px;
    height: 36px;
    border-radius: 6px;
    &.active {
      padding: 10px;
      background-color: ${defaulttheme.color_sea_green};
      img {
        filter: brightness(100);
      }
    }
    &:hover {
      background-color: ${defaulttheme.color_platinum};
    }
  }
  @media (max-width: ${breakpoints.xl}) {
    column-gap: 8px;
  }
  @media (max-width: ${breakpoints.xl}) {
    column-gap: 6px;
  }
`;

const Header = () => {
  const location = useLocation();
  const dispatch = useDispatch();

  console.log(location.pathname);
  return (
    <HeaderMainWrapper className="header flex items-center">
      <Container className="container">
        <div className="header-wrap flex items-center justify-between">
          <div className="flex items-center">
            <button
              type="button"
              className="sidebar-toggler"
              onClick={() => dispatch(toggleSidebar())}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-list-ul"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2m0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
                />
              </svg>
            </button>
            <SiteBrandWrapper to="/" className="inline-flex">
              <div className="brand-img-wrap flex items-center justify-center">
                <img
                  className="site-brand-img"
                  src={staticimages.logo}
                  alt="site logo"
                />
              </div>
              <span className="site-brand-text text-outerspace">
                AuraMosaic
              </span>
            </SiteBrandWrapper>
          </div>
          <NavigationAndSearchWrapper className="flex items-center">
            <NavigationMenuWrapper>
              <ul className="nav-menu-list flex items-center">
                {navMenuData?.map((menu) => {
                  return (
                    <li className="nav-menu-item" key={menu.id}>
                      <Link
                        to={menu.menuLink}
                        className="nav-menu-link 
                     text-base font-medium text-gray"
                      >
                        {menu.menuText}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </NavigationMenuWrapper>
            <form className="search-form">
              <InputGroupWrapper className="input-group">
                <span
                  className="input-icon flex items-center justify-center 
            text-xl text-gray"
                >
                  <i className="bi bi-search"></i>
                </span>
                <Input
                  type="text"
                  className="input-control w-full"
                  placeholder="Search"
                />
              </InputGroupWrapper>
            </form>
          </NavigationAndSearchWrapper>
          <IconLinkWrapper className="flex items-center">
            <Link
              to="/wishlist"
              className={`icon-link${
                location.pathname === "/wishlist" ? "active" : ""
              }inline-flex items-center 
          justify-center`}
            >
              <img src={staticimages.heart} alt="" />
            </Link>
            <Link
              to="/wishlist"
              className={`icon-link${
                location.pathname === "/account" ||
                location.pathname === "/account/add"
                  ? "active"
                  : ""
              }inline-flex items-center 
          justify-center`}
            >
              <img src={staticimages.user} alt="" />
            </Link>
          </IconLinkWrapper>
        </div>
      </Container>
    </HeaderMainWrapper>
  );
};

export default Header;
