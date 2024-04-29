import React from "react";
import AdobeDesign from "./components/AdobeDesign";

const App = () => {
  return (
    <div className="w-full ">
      <AdobeDesign />
    </div>
  );
};

export default App;

// import React, { useState } from "react";
// import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
// import { ChevronLeftOutlined, ChevronRightOutlined } from "@mui/icons-material";

// import Sidebar from "./components/Sidebar";
// import Signup from "./pages/Signup";
// import Login from "./pages/Login";
// import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

// const App = () => {
//   const [open, setOpen] = useState(false);

//   const handleDrawerToggle = () => {
//     setOpen(!open);
//   };

//   return (
//     <BrowserRouter>
//       <div className="App">
//         <AppBar position="static" sx={{ backgroundColor: "primary.main" }}>
//           <Toolbar>
//             <IconButton
//               size="large"
//               edge="start"
//               color="inherit"
//               aria-label="menu"
//               sx={{ mr: 2 }}
//               onClick={handleDrawerToggle}
//             >
//               {open ? <ChevronRightOutlined /> : <ChevronLeftOutlined />}
//             </IconButton>
//             <Typography
//               variant="h6"
//               noWrap
//               component="div"
//               sx={{ flexGrow: 1 }}
//             >
//               Search O Pal
//             </Typography>
//             <Link
//               to="/login"
//               style={{
//                 textDecoration: "none",
//                 color: "inherit",
//                 display: "flex",
//               }}
//             >
//               <Typography variant="h6" sx={{ padding: "12px" }}>
//                 Login
//               </Typography>
//             </Link>
//             <Link
//               to="/signup"
//               style={{
//                 textDecoration: "none",
//                 color: "inherit",
//                 display: "flex",
//               }}
//             >
//               <Typography variant="h6" sx={{ padding: "12px" }}>
//                 Signup
//               </Typography>
//             </Link>
//           </Toolbar>
//         </AppBar>
//         <Sidebar open={open} handleDrawerToggle={handleDrawerToggle} />

//         <Routes>
//           <Route path="/signup" element={<Signup />} />
//           <Route path="/login" element={<Login />} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;
