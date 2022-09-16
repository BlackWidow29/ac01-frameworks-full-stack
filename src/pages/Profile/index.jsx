import React from "react";
import { UserForm } from "../../components/organisms/Forms/UserForm";

import { Background, Box } from './styles';

export default function Profile() {
  return (
    <Background className="align-center justify-center">
      <Box>
        <UserForm />
      </Box>
    </Background>
  )
}