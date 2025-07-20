import {css} from "styled-components";
import styled from "styled-components";
import { defaulttheme } from "./themes/default";

const commonArrowStyles=css`
position:absolute;
top:50%;
transform:translateY(-60%);
z-index:10;
display:flex;
justify-content:center;
width:35px;
height:36px;
border-radius:100%;
background-color:${defaulttheme.color_sea_green};
border:3px solid ${defaulttheme.color_whitesmoke};
svg{
    scale:1.75;
    color:${defaulttheme.color_white};
    margin-top:8px;
}

`;

export const CustomNextArrowWrapper=styled.button`
    ${commonArrowStyles}
    right:0;


`;
export const CustomPreviousArrowWrapper=styled.button`
    ${commonArrowStyles}
    left:0;
`;