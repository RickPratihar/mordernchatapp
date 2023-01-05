import { useTheme } from "@mui/material/styles";
import { Box, Stack, Typography, IconButton, Tabs,Tab } from "@mui/material";
import { CaretLeft } from "phosphor-react";
import React from "react";
import { useDispatch } from "react-redux";
import { UpdateSidebarType } from "../redux/slices/app";

const SharedMessages = () => {
    const theme = useTheme();

    const dispatch = useDispatch();

const [value, setValue] = React.useState(0);
const handleChange = (event, newValue) =>{
    setValue(newValue);
};

    return (
        <Box sx={{ width: 320, height: "100vh" }}>
            <Stack sx={{ height: "100vh" }}>
                {/* Header */}
                <Box sx={{
                    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
                    width: "100%",
                    backgroundColor: theme.palette.mode === "light" ? "#F8FAFF" : theme.palette.background,
                }}>

                    <Stack sx={{ height: '100%', p: 2 }}
                        direction="row"
                        alignItems={"center"}

                        spacing={3}>

                        <IconButton onClick={() => {
                            dispatch(UpdateSidebarType("CONTACT"));
                        }}>
                            <CaretLeft />
                        </IconButton>
                        <Typography variant="subtitle2">Shared Message</Typography>

                    </Stack>

                </Box>

                <Tabs value={value} onChange={handleChange} centered>
                    <Tab lable="Item One"/>
                    <Tab lable="Item Two"/>
                    <Tab lable="Item Three"/>
                </Tabs>

                <Stack
                    sx={{
                        height: "100%",
                        posttion: "relative",
                        flexGrow: 1,
                        overflow: "scroll"
                    }}
                    p={3}
                    spacing={3}>

                </Stack>

            </Stack>

        </Box>
    )
}

export default SharedMessages