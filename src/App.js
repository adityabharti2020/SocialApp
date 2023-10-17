import * as React  from "react";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import Rightbar from "./Components/Rightbar";
import Navbar from "./Components/Navbar";
import Add from "./Components/Add";
import { useState } from "react";
import { Box, ThemeProvider, createTheme } from "@mui/material";
import { Stack } from "@mui/material";
function App() {
  const [mode, setMode] = useState("light");
  const Darktheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={Darktheme}>
      <Box bgcolor={"background.default"} color={"text.primary"}>
        <Navbar />
        <Stack direction="row" spacing={3} justifyContent="space-between">
          <Sidebar setMode={setMode} mode={mode}/>
          <Feed />
          <Rightbar />
        </Stack>
        <Add />
      </Box>
    </ThemeProvider>
  );
}

export default App;
