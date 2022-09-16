import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FlexDiv } from "../../components/base";
import { AuthForm } from "../../components/organisms/Forms/AuthForm";
import { Background, LoginBanner, WhiteBox } from "./styles";

export default function SignUp() {
  const history = useHistory();

  const [fields, setFields] = useState({
    login: "",
    confirmPassword: "",
    password: "",
    acceptTerms: false,
  });

  const redirectToLogin = () => history.goBack();

  const handleSignUp = () =>
    history.push({ pathname: "/profile", state: fields });

  return (
    <Background>
      <FlexDiv className="h-100 align-center justify-between">
        <WhiteBox className="h-100 w-100 column align-center justify-center">
          <AuthForm
            isRegister
            fields={fields}
            setFields={setFields}
            alternateForm={redirectToLogin}
            handleSubmit={handleSignUp}
          />
        </WhiteBox>
        <WhiteBox className="h-100 w-100">
          <FlexDiv className="w-100 h-100 align-center justify-center">
            <LoginBanner />
          </FlexDiv>
        </WhiteBox>
      </FlexDiv>
    </Background>
  );
}
