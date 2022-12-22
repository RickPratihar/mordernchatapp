import { useTheme } from "@mui/material/styles";
import { Box, Stack } from "@mui/system";
import React from "react";
import Conversation from "../../components/Conversation";
import Chats from "./Chats"
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";
import SharedMessages from "../../components/SharedMessages";


const GeneralApp = () => {
  const theme = useTheme();
 const {sideBar} = useSelector((store) => store.app);
 

  return (

    <Stack direction={"row"} sx={{ width: "100%" }}>
      {/* chats */}
      <Chats />
      <Box
        sx={{
          height: "100%",
          width: sideBar.open ? "calc(100vw - 740px)" : "calc(100vw - 420px)",
          backgroundColor:
           theme.palette.mode === "light"
            ? "#F0F4FA" 
            : theme.palette.background.default,
        }}
      >
        {/* conversation*/}
        <Conversation />
      </Box>
      {/* contact */}
      {sideBar.open && (() => {
        switch (sideBar.type) {
          case "CONTACT":
            return <Contact />;

          case "STARRED":

            break;
          case "SHARED":
            return <SharedMessages />


          default:
            break;
        }
      })()}
     
    </Stack>

  );
};

export default GeneralApp;
