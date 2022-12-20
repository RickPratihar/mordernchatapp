import { useTheme } from "@mui/material/styles";
import {  Stack,  } from "@mui/material";
import { Outlet } from "react-router-dom";
import React from "react";
import SideBar from "./Sidebar";



const DashboardLayout = () => {

  const theme = useTheme();


  console.log(theme);

  return (
    <Stack direction="row">
   {/* Sidebar*/}
      <SideBar />
      <Outlet />
    </Stack>
  );
};

export default DashboardLayout;
