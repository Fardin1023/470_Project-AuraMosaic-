import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { SiteBrandWrapper } from "../../styles/header";
import { staticimages } from "../../utils/images";
import { InputGroupWrapper } from "../../styles/themes/form";
import { Input } from "../../styles/themes/form";
import { sideMenuData } from "../../data/data";
import { Link } from "react-router-dom";
import { breakpoints, defaulttheme } from "../../styles/themes/default";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsSidebarOpen,
  toggleSidebar,
} from "../../redux/slices/sidebarSlice";

const SideNavigationWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  z-index: 999;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  padding: 16px;
  transform:translateX(-100%);
  transition:transform 0.3s easy-in-out;

  &.show {
    transform: translateX(0);
    
  }
  .sidebar-close-btn {
    position: absolute;
    right: 16px;
    top: 16px;
    font-size:24px;
    cursor:pointer;
    &:hover {
      color: ${defaulttheme.color_brown};
    }
  }
  .sidenav-search-form {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    margin-top: 20px;
    .input-group {
      min-width: 100%;
      column-gap: 0;
    }
  }
  .sidenav-menu-list {
    gap: 15px;
    margin: 20px 0;
    border-top: 1px solid rgba(0, 0, 0, 0.3);
    padding: 24px 0;
    li {
      padding: 5px 5px 5px 12px;
      border-radius: 4px;
      transition: ${defaulttheme.default_transition};
      &:hover {
        background: rgba(241, 185, 64, 0.91);
        a {
          span {
            color: ${defaulttheme.color_purple};
          }
        }
      }
    }

    a {
      column-gap: 16px;
      &:active {
        color: ${defaulttheme.color_purple};
      }
    }
  }
  @media (max-width: ${breakpoints.xs}) {
    width: 100%;
  }
`;

const Sidebar = () => {
  const location = useLocation();
  const isSidebarOpen = useSelector(selectIsSidebarOpen);
  const dispatch = useDispatch();
  return (
    <SideNavigationWrapper
      className={`bg-white h-full ${isSidebarOpen ? "show" : ""}
      `}>
      <button
        className="sidebar-close-btn text-3xl text-outerspace"
        onClick={() => dispatch(toggleSidebar())}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-x-square-fill"
          viewBox="0 0 16 16"
        >
          <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708" />
        </svg>
      </button>
      <div className="sidenav-head">
        <SiteBrandWrapper to="/" className="inline-flex">
          <div className="brand-img-wrap flex items-center justify-center">
            <img className="site-brand-image" src={staticimages.logo} />
          </div>
          <span className="site-brand-text text-outerspace">AuraMosaic</span>
        </SiteBrandWrapper>
        <form className="sidenav-search-form">
          <InputGroupWrapper className="input-group">
            <span className="input-icon flex items-center justify-center text-xl text-gray">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>
            </span>
            <Input
              type="text"
              className="input-control w-full"
              placeholder="Search"
            />
          </InputGroupWrapper>
        </form>
        <ul className="sidenav-menu-list grid">
          {sideMenuData?.map((menu) => (
            <li key={menu.id}>
              <Link
                to={menu.menuLink}
                className={`flex items-center text-gray ${
                  location.pathname === menu.menuLink ? "active" : ""
                }`}
              >
                <span className="text-xxl">
                  <i className={`bi bi-${menu.iconName}`}></i>
                </span>
                <span className="text-lg font-medium">{menu.menuText}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </SideNavigationWrapper>
  );
};

export default Sidebar;
