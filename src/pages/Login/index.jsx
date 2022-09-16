import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { FlexDiv } from "../../components/base";
import { AuthForm } from "../../components/organisms/Forms/AuthForm";
import { Background, LoginBanner, WhiteBox } from "./styles";

export default function Login() {
  const history = useHistory();

  const [fields, setFields] = useState({
    login: "",
    password: "",
    rememberLogin: false,
  });

  const redirectToSignUp = () => history.push("/signup");

  const handleLogin = () =>
    history.push({ pathname: "/profile", state: fields });

  return (
    <Background>
      <FlexDiv className="h-100 align-center justify-between">
        <WhiteBox className="h-100 w-100 column align-center justify-center">
          <AuthForm
            fields={fields}
            setFields={setFields}
            alternateForm={redirectToSignUp}
            handleSubmit={handleLogin}
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
