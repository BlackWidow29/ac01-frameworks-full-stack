import React from "react";

import {
  GoogleIcon,
  Input,
  Label,
  OutlinedButton,
  PrimaryButton,
  PrimaryCheckBox,
  ThunderIcon,
  Title,
  Typography,
} from "../../../atoms";
import { FlexForm, FlexSpan } from "../../../base";

import { Separator } from "./styles";

export function AuthForm({
  isRegister,
  fields,
  setFields,
  alternateForm,
  handleSubmit,
}) {
  const texts = {
    title: isRegister ? "Registre-se" : "Login",
    googleButton: isRegister
      ? "Registrar-se com o Google"
      : "Logar com o Google",
    submitButton: isRegister ? "Registre-se" : "Login",
    alternateAuthType: isRegister
      ? ["Já possui uma conta", "Login"]
      : ["Não tem conta", "Registre-se"],
  };

  const handleChangeField =
    (fieldKey) =>
    ({ target }) => {
      setFields({ ...fields, [fieldKey]: target.value });
    };

  const handleCheckField =
    (fieldKey) =>
    ({ target }) => {
      setFields({ ...fields, [fieldKey]: target.checked });
      console.log(target.checked);
    };

  const RememberLoginOption = () =>
    !isRegister && (
      <FlexSpan className="align-center justify-between mt-1 mb-1">
        <span>
          <PrimaryCheckBox
            id="rememberPassword"
            checked={fields.rememberLogin}
            onChange={handleCheckField("rememberLogin")}
          />
          <Label strong htmlFor="rememberPassword">
            Lembrar-me
          </Label>
        </span>

        <Typography className="text-primary" bold clickable>
          Esqueceu a senha?
        </Typography>
      </FlexSpan>
    );

  const AcceptTermsOption = () =>
    isRegister && (
      <FlexSpan className="align-center mt-1 mb-1">
        <PrimaryCheckBox
          required
          id="acceptTerms"
          checked={fields.acceptTerms}
          onChange={handleCheckField("acceptTerms")}
        />
        <Label strong htmlFor="acceptTerms">
          Eu aceito os &nbsp;
        </Label>
        <Label className="text-primary" htmlFor="acceptTerms" bold clickable>
          Termos e condições
        </Label>
      </FlexSpan>
    );

  return (
    <FlexForm className="w-50 w-sm-75 column" onSubmit={handleSubmit}>
      <span className="d-sm-hide">
        <ThunderIcon size={50} />
      </span>
      <Title className="mb-1">{texts.title}</Title>
      <Typography strong className="mb-1">
        Qui aliquip enim dolore pariatur dolor ad.
      </Typography>
      <OutlinedButton>
        <FlexSpan className="align-center justify-center">
          <GoogleIcon size={25} marginRight={15} />
          {texts.googleButton}
        </FlexSpan>
      </OutlinedButton>
      <Separator className="align-center justify-center">
        Ou logar com Email
      </Separator>
      <span className="w-100">
        <Typography strong className="mt-1">
          Email*
        </Typography>
        <Input
          required
          placeholder="mail@website.com"
          fullwidth
          value={fields.email}
          onChange={handleChangeField("email")}
        />
      </span>
      <span className="w-100">
        <Typography strong className="mt-1">
          Senha*
        </Typography>
        <Input
          required
          type="password"
          placeholder="Min. 8 caracteres"
          fullwidth
          value={fields.password}
          onChange={handleChangeField("password")}
        />
      </span>
      {isRegister && (
        <span className="w-100">
          <Typography strong className="mt-1">
            Confirmar senha*
          </Typography>
          <Input
            required
            type="password"
            placeholder="Min. 8 caracteres"
            fullwidth
            value={fields.confirmPassword}
            onChange={handleChangeField("confirmPassword")}
          />
        </span>
      )}
      <RememberLoginOption />
      <AcceptTermsOption />
      <PrimaryButton type="submit" fullwidth>
        {texts.submitButton}
      </PrimaryButton>
      <FlexSpan className="align-center mt-1">
        <Typography strong>{texts.alternateAuthType[0]} &nbsp;</Typography>
        <Typography
          className="text-primary"
          bold
          clickable
          onClick={alternateForm}
        >
          {texts.alternateAuthType[1]}
        </Typography>
      </FlexSpan>
    </FlexForm>
  );
}
