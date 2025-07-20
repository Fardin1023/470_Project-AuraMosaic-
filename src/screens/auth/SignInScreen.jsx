import styled from "styled-components";
import { FormGridWrapper, FormTitle } from "../../styles/form_grid";
import { Container } from "../../styles/themes/styles";
import {staticimages} from "../../utils/images";
import AuthOptions from "../../components/auth/AuthOptions";
import { FormElement, Input } from "../../styles/themes/form";

import {Link} from "react-router-dom";


import PasswordInput from "../../components/auth/PasswordInput";
import { BaseButtonBlack } from "../../styles/button";
import { breakpoints, defaulttheme } from "../../styles/themes/default";


const SignInScreenWrapper=styled.section`
  .form-separator{
  margin:35px 0;
  column-gap:20px;
  @media(max-width:${breakpoints.lg}){
    margin:24px 0;
  }
  .separator-text{
  border-radius:60%;
  padding:10px;
  min-width:10px;
  background-color:${defaulttheme.color_purple};
  position:relative;
  } 
  
  }
  .form-elem-text{
    margin-top:16px;
    display:flex;
  }
`;
const SignInScreen = () => {
  return (
    <SignInScreenWrapper>
        <FormGridWrapper>
            <Container>
                <div className="form-grid-content">
                  <div className="form-grid-left">
                    <img src={staticimages.f1} className="object-fit-cover"/>
                  </div>
                  <div className="form-grid-right">
                    <FormTitle>
                      <h3>Sign In</h3>
                      <AuthOptions/>

                      <div className="form-separator flex 
                      items-center justify-center">
                        <span className="separator-line"></span>
                        <span className="separator-text 
                        inline-flex items- justify center text-white">
                          OR
                        </span>
                        <span className="separator-line"></span>
                      </div>
                      <form>
                        <FormElement>
                          <label htmlFor="" className="form-elem-label">
                            User name or email address
                          </label>
                          <Input type="text" placeholder="" name="" className="form-elem-control"/>
                        </FormElement>
                        <PasswordInput fieldName="Password" name="password"/>
                        <Link to="/reset" className="form-elem-text text-end font-medium">
                        Forgot your Password? 
                        </Link>
                        <BaseButtonBlack type="submit" className="form-submit-btn">Sign In</BaseButtonBlack>
                      </form>
                      <p className="flex flex-wrap account-rel text ">Don't have an account?
                        <Link to="/sign_up" className="font-medium">Sign Up</Link>
                      </p>
                    </FormTitle>
                  </div>
                </div>
            </Container>
        </FormGridWrapper>
    </SignInScreenWrapper>
  )
}

export default SignInScreen;