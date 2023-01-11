import { Link as RouterLink } from "react-router-dom";
import { Link, Stack, Typography } from "@mui/material";
import React from "react";
import AuthSocial from "../../sections/auth/AuthSocial";
import LoginFrom from "../../sections/auth/LoginFrom";


const Login = () => {
  return (

    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h4">Login to TalkIndia</Typography>
        <Stack direction={"row"} spacing={0.5}>
          <Typography variant="body2">New User?</Typography>
          <Link to="/auth/register" component={RouterLink} variant="subtitle2">
            Create an accout
          </Link>
        </Stack>
        {/*Login From*/}
        <LoginFrom />
        {/*Auth Socal*/}
        <AuthSocial />
      </Stack>
    </>
  );
};

export default Login;