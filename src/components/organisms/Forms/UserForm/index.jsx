import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Input, SuccessButton, Typography } from "../../../atoms";
import { FlexDiv, FlexForm } from "../../../base";

export function UserForm() {
  const { state } = useLocation();
  const history = useHistory();

  const [profileFields, setProfileFields] = useState({
    firstName: "",
    lastName: "",
    email: state?.email || "",
    password: state?.password || "",
  });

  const handleChangeProfileField =
    (fieldKey) =>
    ({ target }) =>
      setProfileFields({ ...profileFields, [fieldKey]: target.value });

  const handleSaveProfile = (event) => {
    event.preventDefault();
    history.goBack();
  };

  return (
    <FlexForm
      onSubmit={handleSaveProfile}
      className="w-100 column align-center justify-center"
    >
      <FlexDiv className="justify-between mt-1">
        <span className="mr-2">
          <Typography strong>Nome</Typography>
          <Input
            required
            value={profileFields.firstName}
            onChange={handleChangeProfileField("firstName")}
            placeholder="Isabelly"
          />
        </span>
        <span>
          <Typography strong>Sobrenome</Typography>
          <Input
            required
            value={profileFields.lastName}
            onChange={handleChangeProfileField("lastName")}
            placeholder="Dias"
          />
        </span>
      </FlexDiv>
      <span className="w-100 mt-1">
        <Typography strong>Email</Typography>
        <Input
          required
          value={profileFields.email}
          onChange={handleChangeProfileField("email")}
          placeholder="mail@website.com"
          fullwidth
        />
      </span>
      <span className="w-100 mt-1">
        <Typography strong>Senha</Typography>
        <Input
          required
          value={profileFields.password}
          onChange={handleChangeProfileField("password")}
          type="password"
          placeholder="Min. 8 caracteres"
          fullwidth
        />
      </span>
      <SuccessButton className="mt-1" fullWidth>
        Salvar Perfil
      </SuccessButton>
      <Typography bold clickable danger className="mt-1">
        Cancelar
      </Typography>
    </FlexForm>
  );
}
