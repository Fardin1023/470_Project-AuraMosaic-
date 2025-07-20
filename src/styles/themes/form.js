import styled from "styled-components";
import { breakpoints, defaulttheme } from "./default";
export const Input=styled.input`
    font-size:14px;
    border:none;
    outline:0;
    color:${defaulttheme.color_yellow};
    &::placeholder{
        color:${defaulttheme.color_brown};
        font-weight:400;
        @media(max-width: ${breakpoints.sm}){
            font-size:13px;
        }

    }
`

export const Textarea=styled.textarea`
    font-size:14px;
    border:none;
    outline:0;
    color:${defaulttheme.color_outerspace};
    padding:16px;

    textarea::placeholder{
        color:${defaulttheme.color_silver};
        font-weight:400;

        @media(max-width:${breakpoints.sm}){
        font-size: 13px;
        }
    }
`;

export const InputGroupWrapper=styled.div`
min-width:400px;
width:100%;
border-radius:4px;
display:grid;
align-items:stretch;
grid-template-columns:40px auto;
gap:12px;
background-color:${defaulttheme.color_silver};
.input-icon{
width:40px;
height:40px;
@media(max-width:${breakpoints.lg}){
        height:36px;

}
     input{
        border:none;
        background-color:transparent;
     }   

`;

export const FormElement=styled.div``;
