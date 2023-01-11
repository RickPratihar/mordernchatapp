import React from "react";
import { Stack, Box } from "@mui/material";

import Footer from "./Footer";
import Header from "./Header";
import Message from "./Message"


const Conversation = () => {

    return (
        <Stack height={"100%"} maxHeight={"100vh"} weight={"auto"}>
            {/* Chat Header */}
            <Header />

            {/* Msg */}
            <Box weight={"100%"} sx={{ flexGrow: 1, height:"100%", overflowY: "scroll" }}>
             <Message menu={true} />
            </Box>
            {/* Chat Footer */}
            <Footer />
        </Stack>
    );
};

export default Conversation;
