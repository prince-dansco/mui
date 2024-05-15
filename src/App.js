import { Box, Stack, ThemeProvider, createTheme } from "@mui/material";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";

import { useState } from "react";
import { AddToPhotosTwoTone } from "@mui/icons-material";
import Add from "./components/Add";

function App() {
  const [mode, setMode] = useState("light");

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box  bgcolor={"background.default"} color={"text.primary"}>
        <NavBar />
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <SideBar setMode={setMode}  mode={mode}/>
          <Feed />
          <RightBar />
        </Stack>
        <Add/>
      </Box>
    </ThemeProvider>
  );
}

export default App;
