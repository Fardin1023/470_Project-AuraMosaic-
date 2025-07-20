import styled, { css } from "styled-components";
import { defaulttheme } from "./themes/default";
import { Link } from "react-router-dom";

// writing button stylings in normal css
const commonButtonStyles = css`
  font-family: inherit;
  min-width: 110px;
  height: 36px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  border: 1px solid transparent;
  text-transform: capitalize;
  padding-left: 12px;
  padding-right: 12px;
  transition: ${defaulttheme.default_transition};
  &:hover {
    transform: scale(0.97);
  }
`;

const BaseButton = styled.button`
  ${commonButtonStyles}
  color: ${defaulttheme.color_white};
`;

const BaseLink = styled(Link)`
  ${commonButtonStyles}
  color: ${defaulttheme.color_white};
`;

const BaseButtonGreen = styled(BaseButton)`
  background-color: ${defaulttheme.color_sea_green};
  border-color: ${defaulttheme.color_sea_green};
`;

const BaseButtonBlack = styled(BaseButton)`
  background-color: ${defaulttheme.color_black};
`;

const BaseButtonOuterspace = styled(BaseButton)`
  background-color: ${defaulttheme.color_outerspace};
`;

const BaseButtonWhitesmoke = styled(BaseButton)`
  color: ${defaulttheme.color_black};
  background-color: ${defaulttheme.color_whitesmoke};
`;

const BaseLinkGreen = styled(BaseLink)`
  background-color: ${defaulttheme.color_sea_green};
  border-color: ${defaulttheme.color_sea_green};
`;

const BaseLinkBlack = styled(BaseLink)`
  background-color: ${defaulttheme.color_black};
`;

const BaseLinkWhite = styled(BaseLink)`
  color: ${defaulttheme.color_black};
  background-color: ${defaulttheme.color_white};
`;

const BaseLinkOutlineDark = styled(BaseLink)`
  color: ${defaulttheme.color_black};
  border-color: ${defaulttheme.color_black};
`;

const BaseLinkOutlineWhite = styled(BaseLink)`
  color: ${defaulttheme.color_white};
  border-color: ${defaulttheme.color_white};

  &:hover {
    background-color: ${defaulttheme.color_white};
    color: ${defaulttheme.color_outerspace};
  }
`;

const BaseLinkOutlinePlatinum = styled(BaseLink)`
  color: ${defaulttheme.color_black};
  border-color: ${defaulttheme.color_platinum};
`;

export {
  BaseButton,
  BaseLink,
  BaseButtonGreen,
  BaseButtonBlack,
  BaseButtonOuterspace,
  BaseButtonWhitesmoke,
  BaseLinkGreen,
  BaseLinkBlack,
  BaseLinkWhite,
  BaseLinkOutlineDark,
  BaseLinkOutlineWhite,
  BaseLinkOutlinePlatinum,
};