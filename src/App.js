import * as React from "react";
import Sidebar from "./Components/Sidebar";
import Feed from "./Components/Feed";
import Rightbar from "./Components/Rightbar";
import Navbar from './Components/Navbar'
import { Box } from "@mui/material";
import { Stack } from "@mui/material"

function App() {
  return (
    <Box>
      <Navbar/>
      <Stack direction='row' spacing={3} justifyContent='space-between' >
        <Sidebar />
        <Feed />
        <Rightbar />
      </Stack>
    </Box>
  );
}

export default App;
